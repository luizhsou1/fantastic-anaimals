export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabcontent = document.querySelectorAll('[data-tab="content"] section')

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add('active')

    function activeTab(index) {
      tabcontent.forEach(section => {
        section.classList.remove('active')
      })
      const direction = tabcontent[index].dataset.anime
      tabcontent[index].classList.add('active', direction)
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}