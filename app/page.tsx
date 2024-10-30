import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-blue-500 to-teal-600 min-h-screen flex items-center justify-center">
      <section className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-[90%] md:w-[50%] flex flex-col md:flex-row items-center">
        <Image
          src="/image.jpg" 
          alt="Profile Picture"
          width={250}
          height={250}
          className="object-cover rounded-full md:rounded-lg w-32 h-32 md:w-64 md:h-64 -ml-16 mb-6 md:mb-0" 
        />
        <article className="flex flex-col justify-center w-full overflow-hidden">
          <header className="flex flex-col">
            <h2 className="text-2xl font-semibold">Jess Wilson</h2>
            <h3 className="text-gray-400">UX Designer & Developer</h3>
          </header>
          <h3 className="text-gray-500 mt-8 text-center whitespace-normal"> {/* Cambié mt-4 a mt-8 */}
            Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
          </h3>
          <footer className="flex mt-6 space-x-4 justify-start">
            <button className="px-6 py-2 border border-white rounded-lg">
              Profile
            </button>
            <button className="px-6 py-2 bg-white text-gray-900 rounded-lg">
              Follow
            </button>
          </footer>
        </article>
      </section>
    </main>
  );
}

