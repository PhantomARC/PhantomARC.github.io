document.addEventListener("DOMContentLoaded", () => {
  fetch('gg2credit.txt') // Fetch the file from the root directory
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // Insert the content into the .textbox element
			let paragraph = document.createElement("p");
			paragraph.textContent = data;
			let tB = document.getElementById("tb");
      tB.appendchild(paragraph);
    })
    .catch(error => {
      console.error('There was a problem loading the file:', error);
    });
});