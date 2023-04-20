'use client'
import Image from 'next/image'
import { useState } from 'react'

export type LanguageAboutProps = 'en' | 'br'

export function LanguageAbout() {
  const [language, setLanguage] = useState<LanguageAboutProps>('br')

  function handleLanguageEn() {
    setLanguage('en')
  }

  function handleLanguageBr() {
    setLanguage('br')
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex gap-2 items-center justify-start">
        <button
          data-li={language === 'br' ? 'checked' : ''}
          className="flex items-center gap-2 rounded-md transition-all duration-200 ease-out hover:bg-zinc-900 py-2 px-4 hover:scale-105 text-zinc-400 hover:text-emerald-500 data-checked:bg-zinc-900 data-checked:text-emerald-400"
          onClick={handleLanguageBr}
        >
          Português
        </button>
        <button
          data-li={language === 'en' ? 'checked' : ''}
          className="flex items-center gap-2 rounded-md transition-all duration-200 ease-out hover:bg-zinc-900 py-2 px-4 hover:scale-105 text-zinc-400 hover:text-emerald-500 data-checked:bg-zinc-900 data-checked:text-emerald-400"
          onClick={handleLanguageEn}
        >
          English
        </button>
      </div>
      {language === 'br' ? (
        <main>
          <h1 id="about">About me</h1>
          <p>
            Olá, meu nome é Daniel Gabriel, sou um desenvolvedor de software
            especializado em NextJS. Eu sou um desenvolvedor de software
            especializado em NextJS. Eu sou um desenvolvedor de software
            especializado em NextJS. Eu sou um desenvolvedor de software
          </p>
          <h2 id="journey">My journey</h2>
          <p>
            Eu comecei a programar em 2018, quando eu tinha 14 anos. Eu comecei
            a programar em 2018, quando eu tinha 14 anos. Eu comecei a programar
            em 2018, quando eu tinha 14 anos. Eu comecei a programar em 2018,
            quando eu tinha 14 anos. Eu comecei a programar em 2018, quando eu
            tinha 14
          </p>
          <Image
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            alt=""
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />
          <p>Please don&#39;t commit your Protocol password to GitHub!</p>
          <h2 id="experience">Experience</h2>
          <p>
            Eu comecei a programar em 2018, quando eu tinha 14 anos. Eu comecei
            a programar em 2018, quando eu tinha 14 anos. Eu comecei a programar
            em 2018, quando eu tinha 14 anos. Eu comecei a programar em 2018,
            quando eu tinha 14 anos. Eu comecei a programar em 2018, quando eu
            tinha 14
          </p>
          <p>
            Always keep your token safe and reset it if you suspect it has been
            compromised.
          </p>
          <h2 id="certifications">Certifications and courses</h2>
          <p>
            Eu comecei a programar em 2018, quando eu tinha 14 anos. Eu comecei
            a programar em 2018, quando eu tinha 14 anos. Eu comecei a programar
            em 2018, quando eu tinha 14 anos. Eu comecei a programar em 2018,
            quando eu tinha 14 anos. Eu comecei a programar em 2018, quando eu
            tinha 14
          </p>
        </main>
      ) : (
        <main>
          <main>
            <h1 id="about">About me</h1>
            <p>
              Hello, my name is Daniel Gabriel, I am a software developer
              specialized in NextJS. I am a software developer specialized in
              NextJS. I am a software developer specialized in NextJS. I am a
              software developer specialized in NextJS. I am a software
              developer specialized in NextJS. I am a software developer
              specialized in
            </p>
            <h2 id="journey">My journey</h2>
            <p>
              I started programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
            </p>
            <Image
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
              alt=""
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
            <p>Please don&#39;t commit your Protocol password to GitHub!</p>
            <h2 id="experience">Experience</h2>
            <p>
              I started programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
            </p>
            <p>
              Always keep your token safe and reset it if you suspect it has
              been compromised.
            </p>
            <h2 id="certifications">Certifications and courses</h2>
            <p>
              I started programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
              programming in 2018, when I was 14 years old. I started
            </p>
          </main>
        </main>
      )}
    </div>
  )
}
