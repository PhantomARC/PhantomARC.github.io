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
      document.querySelector('.text-block').textContent = data;
    })
    .catch(error => {
      console.error('There was a problem loading the file:', error);
    });
});