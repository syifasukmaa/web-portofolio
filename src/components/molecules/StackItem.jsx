export default function StackItem({ data }) {
  return data.map((icon) => (
    <div
      key={icon.id}
      className='flex flex-col items-center px-0 py-4 shadow-lg shadow-blue/25'
    >
      <img
        src={icon.img}
        alt={icon.alt}
        className='self-center w-1/2'
      />
      <p className='mt-6 dark:text-white'>{icon.text}</p>
    </div>
  ));
}
