export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]')

  if (internalLinks.length) {
    function scrollToSection(event) {
      event.preventDefault() // Previni que faça o comportamento de ir para a seção
      const href = event.currentTarget.getAttribute('href')
      const section = document.querySelector(href)

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      // Forma alternativa
      // window.scrollTo({
      //   top: section.offsetTop,
      //   behavior: 'smooth'
      // })
    }

    internalLinks.forEach(link => {
      link.addEventListener('click', scrollToSection)
    })
  }
}