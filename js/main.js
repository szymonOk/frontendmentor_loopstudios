const hamBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__list-mobile')
const listItems = navMobile.querySelectorAll('a')
const logoLink = document.querySelector('.nav__logo-item')
const navBar = document.querySelector('.nav')
const footerYear = document.querySelector('.footer__text-year')

const handleBurger = () => {
	hamBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-active')
	listItems.forEach(item => item.addEventListener('click', closeNav))
}

const closeNav = () => {
	navMobile.classList.remove('nav-active')
	hamBtn.classList.remove('is-active')
}

// SCROLL DARK BG
const handleScroll = () => {
	if (window.scrollY >= 657) {
		navBar.classList.add('nav-scroll')
	} else {
		navBar.classList.remove('nav-scroll')
	}
}

// YEAR
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
hamBtn.addEventListener('click', handleBurger)
logoLink.addEventListener('click', closeNav)
window.addEventListener('scroll', handleScroll)
