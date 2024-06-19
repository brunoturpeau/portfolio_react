

export default function Home() {

  return (
      <div className={`text-center`}>
          <img className="w-24 h-24 sm:w-36 sm:h-36 border-2 sm:border-4 border-slate-100 rounded-full shadow-xl mx-auto" width={200} height={200} src="/avatar.png" alt="avatar"/>
          <h1 className={`text-2xl mt-5 mb-14 font-black text-center uppercase sm:text-4xl`}>Bruno Turpeau</h1>
          <h2 className={`text-lg font-semibold sm:text-xl`}>Développeur web</h2>
          <p className={`italic`}>Coming soon ...</p>
      </div>
  )
}
