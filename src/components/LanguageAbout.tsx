'use client'
import { useState } from 'react'

export type LanguageAboutProps = 'en' | 'br'

export function LanguageAbout() {
  const [language, setLanguage] = useState<LanguageAboutProps>('en')

  function handleLanguageEn() {
    setLanguage('en')
  }

  function handleLanguageBr() {
    setLanguage('br')
  }

  return (
    <div className=" flex w-full flex-col gap-6">
      <div className="flex w-full items-center justify-start gap-2">
        <button
          data-li={language === 'en' ? 'checked' : ''}
          className="flex items-center gap-2 rounded-md px-4 py-2 text-zinc-400 transition-all duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-500 data-checked:bg-zinc-900 data-checked:text-emerald-400"
          onClick={handleLanguageEn}
        >
          English
        </button>
        <button
          data-li={language === 'br' ? 'checked' : ''}
          className="flex items-center gap-2 rounded-md px-4 py-2 text-zinc-400 transition-all duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-500 data-checked:bg-zinc-900 data-checked:text-emerald-400"
          onClick={handleLanguageBr}
        >
          Português
        </button>
      </div>
      {language === 'br' ? (
        <div>
          <h1 id="about">Sobre mim</h1>
          <p>
            Sou um apaixonado por tecnologia e estou sempre em busca de novas
            oportunidades para aprimorar minhas habilidades e crescer
            profissionalmente. Eu me especializei em stacks modernas como Next,
            React e Node.js, mas meu aprendizado é constante e estou sempre
            aberto a explorar novas ferramentas e linguagens.
            <br />
            <br />
            Minha paixão pela tecnologia está alinhada com meu interesse em
            marketing e design, o que me permite criar soluções criativas e
            eficazes para problemas complexos. Eu sempre sonhei em trabalhar
            como desenvolvedor full-time e estou animado para buscar novas
            oportunidades para expandir meus horizontes.
          </p>
          <h2 id="journey">Minhar Jornada</h2>
          <p>
            Atualmente, trabalho como Desenvolvedor Freelancer e adoro
            compartilhar minhas habilidades com a comunidade, por isso, faço
            transmissões ao vivo com dicas sobre React, Next, Node e outras
            tecnologias. Além disso, estou envolvido em um projeto Open Source
            com foco na aprendizagem por meio de gamificação, que visa ajudar
            desenvolvedores iniciantes a se aprimorar, utilizando metodologias
            ágeis e git flow.
          </p>
          <h2 id="experience">Experiências</h2>
          <h4>Freelancer</h4>
          <h6>Maio de 2022 - No momento · 1 ano</h6>
          <p>
            Sou um especialista em soluções digitais com foco em pequenas e
            médias empresas. Meu objetivo é ajudar esses negócios a se
            destacarem no mercado competitivo, aumentando sua visibilidade e
            digitalizando seus processos com soluções inovadoras de marketing.
            Acredito que a criação de rebranding e landing pages modernas que se
            conectam com seu público-alvo é a chave para o sucesso na era
            digital.
            <br />
            <br />
            Além disso, sou o idealizador do projeto Open Source @Loopy, uma
            plataforma de aprendizado em forma de gamificação no estilo
            Duolingo, mas para programação. Estou desenvolvendo essa iniciativa
            com a minha comunidade na Twitch, onde faço lives diárias para
            ajudar iniciantes com dúvidas sobre as stacks com as quais trabalho,
            além de muito mais.
            <br />
            <br />
            Estou apaixonado por essa jornada e comprometido em ajudar pequenas
            e médias empresas a crescerem em meio a um mundo cada vez mais
            digital.
          </p>
          <h4>R2 Flats - Gestor de Marketing</h4>
          <h6>Jun de 2020 - abr de 2022 · 1 ano 11 meses</h6>
          <p>
            Fazer parte da equipe da R2 foi fundamental para o desenvolvimento
            da minha carreira. Na empresa, eu tive a oportunidade de colocar em
            prática metodologias ágeis e implementar soluções digitais
            inovadoras, incluindo estratégias de marketing como campanhas de
            anúncios pagos e landing pages para retenção de leads.
            <br />
            <br />
            Também pude explorar diferentes metodologias ágeis, como Scrum,
            Kanban e XP, e aplicá-las às necessidades de cada projeto. Ainda
            mais, pude ter ciclos constantes de feedback com os clientes e
            usuários, o que me ajudou a entregar produtos de alta qualidade e
            valor
          </p>
        </div>
      ) : (
        <main>
          <main>
            <h1 id="about">About me</h1>
            <p>
              I am passionate about technology and I am always seeking new
              opportunities to enhance my skills and grow professionally. I have
              specialized in modern stacks like Next, React, and Node.js, but my
              learning is constant and I am always open to exploring new tools
              and languages.
              <br />
              <br />
              My passion for technology aligns with my interest in marketing and
              design, which allows me to create creative and effective solutions
              for complex problems. I have always dreamed of working as a
              full-time developer and I am excited to pursue new opportunities
              to broaden my horizons.
            </p>
            <h2 id="journey">My journey</h2>
            <p>
              Currently, I work as a Freelance Developer, and I love sharing my
              skills with the community. That&apos;s why I do live streams with
              tips about React, Next, Node, and other technologies.
              Additionally, I am involved in an Open Source project focused on
              learning through gamification, aiming to help beginner developers
              improve their skills using agile methodologies and Git flow.
            </p>
            <h2 id="experience">Experience</h2>
            <h4>Freelancer</h4>
            <h6>May 2022 - Present · 1 year</h6>
            <p>
              Hello, I am a digital solutions expert with a focus on small and
              medium-sized businesses. My goal is to help these businesses stand
              out in the competitive market, increase their visibility, and
              digitize their processes with innovative marketing solutions. I
              believe that creating modern rebranding and landing pages that
              connect with your target audience is the key to success in the
              digital era.
              <br />
              <br />
              Additionally, I am the creator of the Open Source project @Loopy,
              a gamified learning platform for programming in the style of
              Duolingo. I am developing this initiative with my community on
              Twitch, where I host daily livestreams to assist beginners with
              questions about the stacks I work with, and much more.
              <br />
              <br />I am passionate about this journey and committed to helping
              small and medium-sized businesses grow in an increasingly digital
              world. If you need customized digital solutions for your business,
              or are interested in collaborating with @Loopy, please feel free
              to contact me!
            </p>
            <h4>R2 Flats - Marketing Manager</h4>
            <h6>Jun de 2020 - abr de 2022 · 1 ano 11 meses</h6>
            <p>
              Being part of the R2 team was essential to the development of my
              career. At the company, I had the opportunity to put agile
              methodologies into practice and implement innovative digital
              solutions, including marketing strategies such as paid ad
              campaigns and landing pages for lead retention.
              <br />
              <br />I was also able to explore different agile methodologies,
              such as Scrum, Kanban, and XP, and apply them to the needs of each
              project. Additionally, I had constant cycles of feedback with
              clients and users, which helped me deliver high-quality and
              valuable products.
            </p>
          </main>
        </main>
      )}
    </div>
  )
}
