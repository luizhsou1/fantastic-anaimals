const tabmenu = document.querySelectorAll('.js-tabmenu li')
const tabcontent = document.querySelectorAll('.js-tabcontent section')

if (tabmenu.length && tabcontent.length) {
  tabcontent[0].classList.add('active')
  
  function activeTab(index) {
    tabcontent.forEach(section => {
      section.classList.remove('active')
    })
    tabcontent[index].classList.add('active')
  }
  
  tabmenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index)
    })
  })
}