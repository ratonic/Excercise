import Image from 'next/image';
import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-blue-500 to-teal-600 min-h-screen flex items-center justify-center">
      <section className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-[800px] flex flex-col md:flex-row items-center gap-y-6">
        
        {/* Componente de alternancia de temas */}
        <div className="absolute top-4 right-4">
          <ThemeSwitch />
        </div>

        {/* Imagen de perfil */}
        <Image
          src="/image.jpg"
          alt="Profile Picture"
          width={250}
          height={250}
          className="object-cover rounded-full md:rounded-lg w-32 h-32 md:w-64 md:h-64 -ml-16 mb-6 md:mb-0"
        />

        {/* Contenido del perfil */}
        <article className="flex flex-col justify-center w-full text-center md:text-left">
          <header className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-semibold">Jess Wilson</h2>
            <h3 className="text-gray-400">UX Designer & Developer</h3>
          </header>
          <h3 className="text-gray-500 mt-8 whitespace-normal">
            Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
          </h3>
          <footer className="flex mt-6 space-x-4 justify-center md:justify-start">
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
