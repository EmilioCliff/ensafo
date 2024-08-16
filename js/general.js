const menuBtn = document.getElementById("nav__toogle");
const closeBtn = document.getElementById("nav__close");
const navMenu = document.getElementById("nav__menu");
const navLinks = document.querySelectorAll(".nav__link");

menuBtn.addEventListener("click", () => {
	header.classList.remove("is-visible");
	navMenu.classList.add("show__menu");
});

let closeTimeout;

closeBtn.addEventListener("click", () => {
	navMenu.classList.remove("show__menu");
	if (window.scrollY >= 100) {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
		}

		closeTimeout = setTimeout(() => {
			header.classList.add("is-visible");
		}, 500);
	}
});

navLinks.forEach((btn) => {
	btn.addEventListener("click", () => {
		navMenu.classList.remove("show__menu");
		if (window.scrollY >= 100) {
			if (closeTimeout) {
				clearTimeout(closeTimeout);
			}

			closeTimeout = setTimeout(() => {
				header.classList.add("is-visible");
			}, 500);
		}
	});
});

let header = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll_up");

function onScroll() {
	let header = document.querySelector("header");
	if (window.scrollY >= 100) {
		if (!navMenu.classList.contains("show__menu")) {
			header.classList.add("is-visible");
		}
	} else {
		header.classList.remove("is-visible");
	}

	if (window.scrollY >= 500) {
		scrollBtn.style.opacity = "1";
	} else {
		scrollBtn.style.opacity = "0";
	}
	scroll(onScroll);
}

let ticking = false;

function handleScroll() {
	if (!ticking) {
		window.requestAnimationFrame(() => {
			onScroll();
			ticking = false;
		});
		ticking = true;
	}
}

window.addEventListener("scroll", handleScroll);

onScroll();

// const scrollToTopTarget = document.getElementById("scrollToTopTarget");

// scrollBtn.addEventListener("click", function (event) {
// 	// event.preventDefault();
// 	console.log("clicked");
// 	// window.scrollTo({
// 	// 	top: 1000,
// 	// 	behavior: "smooth",
// 	// });
// });
