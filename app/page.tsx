import {Navigation} from "@/app/components/Navigation";

export default function Home() {
  return (
      <div className={`h-full flex flex-col sm:flex-row`}>
        <Navigation />
        <main className={`flex flex-col items-center w-full h-screen w-full justify-center`}>
          <h1>Bruno Turpeau</h1>
            <h2>Développeur web</h2>
        </main>
      </div>
  )
}
