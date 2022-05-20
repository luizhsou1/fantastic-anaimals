export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  if (sections.length) {
    function scrollAnimation() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isVisibleSection = (sectionTop - (window.innerHeight * 0.8)) < 0
        if (isVisibleSection) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', scrollAnimation)

    scrollAnimation()
  }
}