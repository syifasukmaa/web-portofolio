import CertificationList from '../molecules/CertificationList';
import sertificates from '../../data/sertifikasi.json';

export default function Certification() {
  return (
    <section
      id='certificate'
      className='w-full py-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200'
    >
      <div className='w-[90%] mx-auto lg:w-[75%]'>
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 '>Certificates</h3>
          <p className='pt-2 font-light text-greys md:text-xl dark:text-ygPurple dark:font-normal'>
            Certification That Has Been Completed
          </p>
        </div>
        <CertificationList certifacates={sertificates} />
      </div>
    </section>
  );
}
