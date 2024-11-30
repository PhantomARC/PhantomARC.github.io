/* HTML BLOCKS
 * Header Block
 * Footer Block
 */

const footer = document.getElementById('footer');
footer.content = document.createTextNode('© 2024 _ARX Core by _ARX. All rights reserved.');
footer.appendChild(footer.content);
document.body.appendChild(footer);



// change the favicon based on the browser
const favicon = document.getElementById('favicon'); //grab favicon Element
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

/* setBrowserFavicon
 * This function sets the favicon based on the browser used to access the site.
 * Specifically, the function checks for dark mode and/or Firefox, as Firefox is the only
 * browser which accepts animated favicons and otherwise the icon should match the theme.
*/
function setBrowserFavicon() {
		const browser = navigator.userAgent; //get browser
		const darkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches; //get mode
		
		if (browser.includes('Firefox')) { //only firefox and some opera browser support APNG + AGifs
			favicon.type="image/gif"
			favicon.href="res/images/favicon.gif";
		} else { //default to color mode png otherwise
			favicon.type="image/png"
			favicon.href="res/images/favicon-" + (darkScheme ? "light" : "dark") + ".png"; 
		}
}





let typeTime = [57,53,54,55,47,33,55,120,22,12,120,77,54,54,54,0,54,54,54,54,77,155,155,155];


/* setBrowserFavicon
 * This function sets the favicon based on the browser used to access the site.
 * Specifically, the function checks for dark mode and/or Firefox, as Firefox is the only
 * browser which accepts animated favicons and otherwise the icon should match the theme.
*/
function typeHeader(message, index) {
		const header = document.getElementById('header');
		if (index < message.length) {
				header.textContent += message.charAt(index); // Add one character at a time
				setTimeout(function() {typeHeader(message, index + 1);}, typeTime[index]); // recursive function
		} else {
				header.style.borderRight = 'none'; // Remove cursor after typing finishes
		}
}


const hexIcons = document.querySelectorAll('.hex-container');
const hexText = document.querySelector('.hex-text');
const hexLink = document.querySelectorAll('.hex-link');
let hexTypeInterval; // To store the interval ID

// Function to type out text letter by letter
function typeText(text) {
	let i = 0;
	hexText.textContent = ''; // Clear previous text
	hexText.style.visibility = 'visible'; // Make text visible

	// Clear any previous interval to avoid overlaps
	clearInterval(hexTypeInterval);

	hexTypeInterval = setInterval(() => {
		hexText.textContent += text[i]; // Add one letter at a time
		i++;
		if (i === text.length) {
			clearInterval(hexTypeInterval); // Stop typing when done
		}
	}, 20); // Adjust typing speed here (100ms per letter)
}


hexIcons.forEach(container => { // Attach event listeners to each icon container
	container.addEventListener('mouseenter', () => {
		const newText = container.getAttribute('data-text'); // Get the text
		typeText(newText); // Call typing function
	});
	
	container.addEventListener('touchstart', () => {
		const newText = container.getAttribute('data-text'); // Get the text
		typeText(newText); // Call typing function
	});

	container.addEventListener('mouseleave', () => {
		hexText.style.visibility = 'hidden'; // Hide the text when mouse leaves
		clearInterval(hexTypeInterval); // Stop any ongoing typing
	});
	
	container.addEventListener('touchend', () => {
		hexText.style.visibility = 'hidden'; // Hide the text when mouse leaves
		clearInterval(hexTypeInterval); // Stop any ongoing typing
	});
});
hexLink.forEach(link => { // Attach event listeners to animations
  link.addEventListener('touchstart', () => {
    link.querySelector('.core-image').style.filter = 'invert(13%) sepia(74%) saturate(7013%) hue-rotate(-23deg) brightness(100%) contrast(105%)';
    link.querySelector('.shell-image').style.filter = 'invert(13%) sepia(74%) saturate(7013%) hue-rotate(-23deg) brightness(100%) contrast(105%)';
		link.querySelector('.shell-image').style.transform = 'scale(1.05) rotate(90deg)';
		
  });
  link.addEventListener('touchend', () => {
    link.querySelector('.core-image').style.filter = '';
		link.querySelector('.shell-image').style.filter = '';
    link.querySelector('.shell-image').style.transform = '';
  });
});


//execute
window.onload = function() {
	setBrowserFavicon();
	typeHeader("WELCOME TO _ARX CORE >>>", 0);
};



document.addEventListener("DOMContentLoaded", () => {
	console.log("YEP");
	fetch('./header.html')
		.then(response => response.text())
		.then(data => document.querySelector('header').innerHTML = data);

	fetch('./footer.html')
		.then(response => response.text())
		.then(data => document.querySelector('footer').innerHTML = data);
});