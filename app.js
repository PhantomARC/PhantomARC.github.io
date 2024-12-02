/* HTML BLOCKS
 * Header Block
 * Footer Block
 */

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
const headerAtt = document.querySelector('.headerpanel').getAttribute('header-text');
let hexTypeInterval;

/* typeText
 * This function inserts text letter by letter into the navpanel at fixed intervals.
*/
function typeText(text) {
	let i = 0;
	hexText.textContent = '';
	hexText.style.visibility = 'visible';
	
	clearInterval(hexTypeInterval);

	hexTypeInterval = setInterval(() => {
		hexText.textContent += text[i]; 
		i++;
		if (i === text.length) {
			clearInterval(hexTypeInterval);
		}
	}, 20); // type speed
}


hexIcons.forEach(container => { // Attach event listeners to each container
	container.addEventListener('mouseenter', () => {
		const newText = container.getAttribute('data-text');
		typeText(newText);
	});
	
	container.addEventListener('touchstart', () => { //touch variation
		const newText = container.getAttribute('data-text');
		typeText(newText);
	});

	container.addEventListener('mouseleave', () => {// Hide text when mouse leaves
		hexText.style.visibility = 'hidden'; 
		clearInterval(hexTypeInterval); // Stop any ongoing typing
	});
	
	container.addEventListener('touchend', () => { //touch variation
		hexText.style.visibility = 'hidden';
		clearInterval(hexTypeInterval);
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
	typeHeader(headerAtt, 0);
};


// make it so contact buttons add text to clipboard
document.addEventListener("DOMContentLoaded", () => {
  const contactheader = document.getElementById('contactheader');

  // Add click event to all non-link contact images (scuffed, I know)
  document.querySelectorAll('.contact-image').forEach(image => {
    image.addEventListener('click', () => {
      const copyText = image.getAttribute('copy');
			const resultText = image.getAttribute('result');
      navigator.clipboard.writeText(copyText)
        .then(() => {
          contactheader.textContent = resultText;
          setTimeout(() => {
            contactheader.textContent = 'Contact Me!';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  });
});