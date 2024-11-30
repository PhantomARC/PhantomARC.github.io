document.addEventListener("DOMContentLoaded", () => {
	console.log("YEP");
	fetch('https://github.com/PhantomARC/PhantomARC.github.io/blob/main/res/html/header.html')
		.then(response => response.text())
		.then(data => document.querySelector('header').innerHTML = data);

	fetch('https://github.com/PhantomARC/PhantomARC.github.io/blob/main/res/html/footer.html')
		.then(response => response.text())
		.then(data => document.querySelector('footer').innerHTML = data);
});