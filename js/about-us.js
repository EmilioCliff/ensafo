let plusBtns = document.querySelectorAll(".plus-icon");
plusBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		let currentOpen = document.querySelector(".read-article");
		if (currentOpen) currentOpen.classList.remove("read-article");
		btn.closest(".bd-article").classList.add("read-article");
	});
});

let minusBtns = document.querySelectorAll(".minus-icon");
minusBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.closest(".bd-article").classList.remove("read-article");
	});
});
