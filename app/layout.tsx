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
                        <span>
                            <svg className="w-5 h-5 me-2 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                              <path stroke="currentColor"
                                    d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                            </svg>
                        </span>
                        <div onClick={ToggleSwitchMode}
                             className="relative w-11 h-6 bg-gray-200
                            peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-slate-300
                            dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700
                            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                            peer-checked:after:border-white after:content-[''] after:absolute
                            after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300
                            after:border after:rounded-full after:w-5 after:h-5 after:transition-all
                            dark:border-gray-600 peer-checked:bg-slate-300"></div>
                        <span>
                            <svg className="w-5 h-5 ms-2 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor"
                                      d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                            </svg>
                        </span>
                    </label>
                </div>
                {children}
            </main>
        </div>
    </body>
    </html>
  );
}
