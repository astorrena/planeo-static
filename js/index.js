
document.addEventListener('DOMContentLoaded', function () {
  // URL of the JSON endpoint
  const apiUrl = 'https://astorrena.github.io/planeo-static/planeo.json';

  // Fetch data using the fetch API
  fetch(apiUrl)
    .then(response => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON from the response
      return response.json();
    })
    .then(data => {
      // Process the JSON data and create cards
      createCards(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Fetch error:', error);
    });

  function createCards(data) {
    const cardsContainerMusica = document.getElementById('collection-group-musica');
    const cardsContainerTeatro = document.getElementById('collection-group-teatro');

    // Iterate through each item in the JSON data
    data.forEach(item => {
      // Create a card element
      const card = document.createElement('a');
      const card2 = document.createElement('a');
      card.classList.add('collection-card');
      card2.classList.add('collection-card');

      // Add content to the card (customize this based on your JSON structure)
      card.innerHTML = `
        <img class="card-image" src="${item.image}" alt="ojete calor">
        <h3 class="card-title">${item.title}</h3>
        `;

      // Add content to the card (customize this based on your JSON structure)
      card2.innerHTML = `
        <img class="card-image" src="${item.image}" alt="ojete calor">
        <h3 class="card-title">${item.title}</h3>
        `;

      // Append the card to the container
      cardsContainerMusica.appendChild(card);
      cardsContainerTeatro.appendChild(card2);
    });
  }
});