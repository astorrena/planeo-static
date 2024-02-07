
  document.addEventListener('DOMContentLoaded', function() {
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
      const cardsContainer = document.getElementById('collection-group');
  
      // Iterate through each item in the JSON data
      data.forEach(item => {
        // Create a card element
        const card = document.createElement('a');
        card.classList.add('collection-card');
  
        // Add content to the card (customize this based on your JSON structure)
        card.innerHTML = `
                <div class="card-image_container">
                    <img class="card-image" src="${item.image}" alt="ojete calor">
                </div>
                <h3 class="card-title">${item.title}</h3>
        `;
  
        // Append the card to the container
        cardsContainer.appendChild(card);
      });
    }
  });