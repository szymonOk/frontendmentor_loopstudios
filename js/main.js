const hamBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__list-mobile')
const listItems = navMobile.querySelectorAll('a')
const logoLink = document.querySelector('.nav__logo-item')

const handleBurger = () => {
	hamBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-active')
	listItems.forEach(item => item.addEventListener('click', closeNav))
}

const closeNav = () => {
	navMobile.classList.remove('nav-active')
	hamBtn.classList.remove('is-active')
}

hamBtn.addEventListener('click', handleBurger)
logoLink.addEventListener('click', closeNav)
