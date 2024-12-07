import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="background-container">
      <div>
        {/* Navbar */}
        <div className='flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-5 flex-col sm:flex-row gap-4 sm:gap-0'>
          <img src={logo} alt="logo" className='w-32 sm:w-auto' />
          <div className='flex gap-2 sm:gap-4 flex-wrap justify-center'>
            <button className='btn-yellow text-sm sm:text-base'>INICIO</button>
            <button className='btn-yellow text-sm sm:text-base'>¿CÓMO JUGAR?</button>
            <button className='btn-yellow text-sm sm:text-base'>PREMIOS</button>
            <button className='btn-red text-sm sm:text-base'>¡ACCESO!</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center text-white min-h-[80vh] px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            JUEGUE AHORA<br />Y GANE!
          </h1>
          <p className="text-lg sm:text-xl mb-2 max-w-2xl">
            Participa en partidas emocionantes y gana<br className="hidden sm:block" />
            premios increíbles, ¡donde y cuando quieras!
          </p>
          <button className="btn-yellow text-sm sm:text-base">
            ¡JUGAR!
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
