import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [section, setSection] = useState("Home");

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <Navbar section={section} setSection={setSection} />
      <section>

      </section>
    </main>
  )
}
