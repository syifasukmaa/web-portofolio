import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, galleryContainerVariant, galleryVariant, zoomIn } from "../../utils/motion";
import { useState, useRef } from "react";

export default function CertificationList({ certifacates }) {
    const [modalImage, setModalImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);

    const prev = () => setCurrentIndex((i) => (i === 0 ? certifacates.length - 1 : i - 1));
    const next = () => setCurrentIndex((i) => (i === certifacates.length - 1 ? 0 : i + 1));

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        touchStartX.current = null;
    };

    const cert = certifacates?.[currentIndex];

    return (
        <>
            <div className="relative mt-10 md:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <AnimatePresence mode="wait">
                    {cert && (
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl shadow-black/10 overflow-hidden"
                        >
                            <div className="w-full px-5 pt-5">
                                <img
                                    src={cert.image}
                                    alt={cert.desc}
                                    width={1200}
                                    height={800}
                                    className="w-full bg-cover rounded-md cursor-pointer"
                                    onClick={() => setModalImage(cert.image)}
                                />
                            </div>
                            <div className="px-5 py-5">
                                <p className="text-xl font-medium dark:text-dark700">{cert.title}</p>
                                <p className="mt-2 text-base font-light dark:text-dark600">{cert.desc}</p>
                                <p className="dark:text-dark600">{cert.year}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-md text-blue dark:text-darkBlue text-2xl hover:bg-white/30 transition"
                    aria-label="Previous"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-md text-blue text-2xl dark:text-darkBlue hover:bg-white/30 transition"
                    aria-label="Next"
                >
                    ›
                </button>

                <div className="flex justify-center gap-2 mt-5">
                    {certifacates?.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-blue dark:bg-darkBlue" : "w-2 bg-blue dark:bg-darkBlue hover:bg-blue/50 dark:hover:bg-darkBlue/50"}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <p className="text-center text-sm text-blue dark:text-darkBlue mt-2">
                    {currentIndex + 1} / {certifacates?.length}
                </p>
            </div>

            <motion.div
                variants={galleryContainerVariant}
                initial="hidden"
                whileInView="show"
                className="relative hidden md:grid w-full gap-5 mt-10 rounded-lg hover:z-10 md:grid-cols-2 xl:grid-cols-3"
            >
                {certifacates?.map((certificate) => (
                    <motion.div
                        variants={galleryVariant}
                        key={certificate.id}
                        className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl shadow-black/10 transition-all duration-500 ease-in-out hover:scale-105 hover:border-blue/30 hover:shadow-blue/20 dark:bg-white/ dark:border-white/10 overflow-hidden"
                    >
                        <div className="z-20 w-full px-5 py-5 overflow-hidden transition-all hover:relative hover:z-50">
                            <img
                                src={certificate.image}
                                alt={certificate.desc}
                                width={1200}
                                height={800}
                                className="w-full bg-cover rounded-md cursor-pointer"
                                onClick={() => setModalImage(certificate.image)}
                            />
                        </div>
                        <div className="px-5 pb-5">
                            <p className="text-xl font-medium dark:text-dark700">{certificate.title}</p>
                            <p className="mt-2 text-base font-light dark:text-dark600">{certificate.desc}</p>
                            <p className="dark:text-dark600">{certificate.year}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {modalImage && (
                    <motion.div
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={fadeIn}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                        onClick={() => setModalImage(null)}
                    >
                        <motion.img
                            initial="hidden"
                            animate="show"
                            variants={zoomIn}
                            src={modalImage}
                            alt="Preview"
                            className="max-h-[80%] max-w-[90%] rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
