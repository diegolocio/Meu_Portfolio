import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const skills = [
    {
      name: 'Python',
      description: 'Programação, lógica e desenvolvimento de aplicações.',
      icon: '🐍',
    },
    {
      name: 'HTML',
      description: 'Estruturação e desenvolvimento de páginas web.',
      icon: '🌐',
    },
    {
      name: 'CSS',
      description: 'Criação de interfaces modernas, responsivas e estilizadas.',
      icon: '🎨',
    },
    {
      name: 'JavaScript',
      description: 'Interatividade e funcionalidades para aplicações web.',
      icon: '⚡',
    },
    {
      name: 'React',
      description: 'Desenvolvimento de interfaces utilizando componentes.',
      icon: '⚛️',
    },
    {
      name: 'TypeScript',
      description: 'JavaScript com tipagem para aplicações mais organizadas.',
      icon: '🔷',
    },
  ]

  const projects = [
    {
      title: 'Projeto Web',
      description:
        'Aplicação web desenvolvida utilizando tecnologias modernas de front-end.',
      technologies: ['React', 'TypeScript', 'CSS'],
    },
    {
      title: 'Projeto Python',
      description:
        'Projeto desenvolvido em Python com foco em lógica e resolução de problemas.',
      technologies: ['Python'],
    },
    {
      title: 'Portfólio',
      description:
        'Meu portfólio pessoal desenvolvido para apresentar minhas habilidades e projetos.',
      technologies: ['React', 'TypeScript', 'CSS'],
    },
  ]

  return (
    <div className="portfolio">

      {/* HEADER */}
      <header className="header">
        <div className="container nav">

          <a href="#home" className="logo">
            <span>&lt;</span>Dev<span>/&gt;</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>

          <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Início
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              Sobre mim
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Habilidades
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projetos
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <main>

        <section id="home" className="hero-section">
          <div className="container hero-content">

            <div className="hero-text">

              <p className="hero-small">
                OLÁ, EU SOU DESENVOLVEDOR
              </p>

              <h1>
                Transformando ideias em{' '}
                <span>experiências digitais.</span>
              </h1>

              <p className="hero-description">
                Desenvolvedor em formação, apaixonado por tecnologia,
                programação e criação de soluções digitais.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  Ver meus projetos
                </a>

                <a href="#contact" className="secondary-button">
                  Entre em contato
                </a>
              </div>

            </div>

            <div className="hero-code">
              <div className="code-window">

                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <p>developer.ts</p>
                </div>

                <div className="code-content">
                  <p>
                    <span className="purple">const</span>{' '}
                    <span className="blue">developer</span> = {'{'}
                  </p>

                  <p className="indent">
                    <span className="red">name:</span>{' '}
                    <span className="green">'Seu Nome'</span>,
                  </p>

                  <p className="indent">
                    <span className="red">role:</span>{' '}
                    <span className="green">'Developer'</span>,
                  </p>

                  <p className="indent">
                    <span className="red">focus:</span> [
                  </p>

                  <p className="indent-2">
                    <span className="green">'Web'</span>,
                  </p>

                  <p className="indent-2">
                    <span className="green">'Python'</span>,
                  </p>

                  <p className="indent-2">
                    <span className="green">'React'</span>,
                  </p>

                  <p className="indent-2">
                    <span className="green">'TypeScript'</span>
                  </p>

                  <p className="indent">],</p>

                  <p>
                    <span className="blue">{'}'}</span>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SOBRE */}
        <section id="about" className="section">
          <div className="container">

            <div className="section-title">
              <span>01.</span>
              <h2>Sobre mim</h2>
            </div>

            <div className="about-content">

              <div className="about-text">
                <p>
                  Sou estudante e desenvolvedor em formação, interessado
                  principalmente em tecnologia, programação e desenvolvimento
                  de aplicações.
                </p>

                <p>
                  Estou constantemente estudando e colocando meus
                  conhecimentos em prática através de projetos, buscando
                  evoluir tanto na parte técnica quanto na criação de
                  soluções úteis.
                </p>

                <p>
                  Atualmente, venho desenvolvendo conhecimentos em
                  <strong> Python, HTML, CSS, JavaScript, React e TypeScript.</strong>
                </p>
              </div>

              <div className="about-card">
                <div className="about-icon">💻</div>
                <h3>Desenvolvedor</h3>
                <p>
                  Sempre aprendendo, criando e transformando conhecimento
                  em projetos.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* HABILIDADES */}
        <section id="skills" className="section skills-section">
          <div className="container">

            <div className="section-title">
              <span>02.</span>
              <h2>Minhas habilidades</h2>
            </div>

            <p className="section-description">
              Tecnologias e ferramentas que fazem parte da minha jornada
              de desenvolvimento.
            </p>

            <div className="skills-grid">

              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h3>{skill.name}</h3>

                  <p>{skill.description}</p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* PROJETOS */}
        <section id="projects" className="section">
          <div className="container">

            <div className="section-title">
              <span>03.</span>
              <h2>Projetos</h2>
            </div>

            <p className="section-description">
              Alguns projetos que representam minha evolução como
              desenvolvedor.
            </p>

            <div className="projects-grid">

              {projects.map((project) => (
                <article className="project-card" key={project.title}>

                  <div className="project-top">
                    <span className="folder">📁</span>
                    <span className="project-arrow">↗</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* CONTATO */}
        <section id="contact" className="section contact-section">
          <div className="container contact-content">

            <div className="section-title center-title">
              <span>04.</span>
              <h2>Vamos conversar?</h2>
            </div>

            <p>
              Tem um projeto, uma ideia ou simplesmente quer trocar uma
              ideia sobre tecnologia?
            </p>

            <a
              href="mailto:seuemail@email.com"
              className="primary-button"
            >
              Entrar em contato
            </a>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Desenvolvido com ❤️ utilizando React + TypeScript
        </p>

        <p>
          © 2026 - Todos os direitos reservados.
        </p>
      </footer>

    </div>
  )
}

export default App