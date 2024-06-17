'use client'
import "./globals.css";
import {Navigation} from "@/app/components/Navigation";
import {useState} from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [darkMode, setDarkMode] = useState(true)

    function ToggleSwitchMode(){
        if (darkMode) {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    }

  return (
    <html className={darkMode ? `dark ` : ``} lang="fr">
    <body className={`h-full text-base bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-50 sm:text-lg`}>
        <div className={`h-full flex flex-col sm:flex-row`}>
            <Navigation/>
            <main className={`flex flex-col items-center h-screen w-full justify-between`}>
                <div className={`w-full flex items-center justify-end p-5`}>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div onClick={ToggleSwitchMode}
                             className="relative w-11 h-6 bg-gray-200
                            peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
                            dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
                            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                            peer-checked:after:border-white after:content-[''] after:absolute
                            after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300
                            after:border after:rounded-full after:w-5 after:h-5 after:transition-all
                            dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                    </label>
                </div>
                {children}
            </main>
        </div>
    </body>
    </html>
  );
}
