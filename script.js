const ACTIVE_CLASS = 'active'

function initTabNav() {
  const tabmenu = document.querySelectorAll('.js-tabmenu li')
  const tabcontent = document.querySelectorAll('.js-tabcontent section')

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add(ACTIVE_CLASS)

    function activeTab(index) {
      tabcontent.forEach(section => {
        section.classList.remove(ACTIVE_CLASS)
      })
      tabcontent[index].classList.add(ACTIVE_CLASS)
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(ACTIVE_CLASS)
      this.nextElementSibling.classList.toggle(ACTIVE_CLASS)
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

function initSmoothScroll() {
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

initTabNav()
initAccordion()
initSmoothScroll()