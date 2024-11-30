document.addEventListener("DOMContentLoaded", () => {
	console.log("YEP");
	fetch('https://PhantomARC.github.io/res/html/header.html')
		.then(response => response.text())
		.then(data => document.querySelector('header').innerHTML = data);

	fetch('https://PhantomARC.github.io/res/html/footer.html')
		.then(response => response.text())
		.then(data => document.querySelector('footer').innerHTML = data);
});