export default function initModal() {
  const containerModal = document.querySelector('[data-modal="container"]')
  const openModalButton = document.querySelector('[data-modal="open"]')
  const closeModalButton = document.querySelector('[data-modal="close"]')

  if (containerModal && openModalButton && closeModalButton) {
    function toggleModal(event) {
      event.preventDefault()
      containerModal.classList.toggle('active')
    }

    function clickOutsideTheModal(event) {
      if (event.target === this) {
        toggleModal(event)
      }
    }

    openModalButton.addEventListener('click', toggleModal)
    closeModalButton.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clickOutsideTheModal)
  }
}
