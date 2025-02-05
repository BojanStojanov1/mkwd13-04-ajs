function DataDisplay() {
  this.button = document.getElementById("getData");
  this.display = document.getElementById("display");

  this.fetchAndDisplay = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      const data = await response.json();

      this.display.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.email}</p>
      `;
    } catch (error) {
      this.display.textContent = "Error loading data";
    }
  };

  this.button.addEventListener("click", this.fetchAndDisplay);
}

const app = new DataDisplay();
