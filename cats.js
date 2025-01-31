const catApiUrl = "https://api.thecatapi.com/v1/images/search";

async function fetchCatImage() {
    try {
        const response = await fetch(catApiUrl);
        const data = await response.json();

        if (data.length > 0) {
            displayCatImage(data[0].url);
        } else {
            console.error("No cat image found!");
        }
    } catch (error) {
        console.error("Error fetching cat image:", error);
    }
}

function displayCatImage(imageUrl) {
    const catContainer = document.getElementById("cat-container");
    catContainer.innerHTML = "";

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Random Cat";
    img.width = 200;
    img.height = 200;
    img.style.borderRadius = "50%";

    catContainer.appendChild(img);
}

const colors = ["#ff6600", "#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff00ff"];

function changeButtonColor() {
    const button = document.getElementById("fetchCatBtn");
    let index = 0;

    setInterval(() => {
        button.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 300);
}

document.getElementById("fetchCatBtn").addEventListener("click", fetchCatImage);
document.addEventListener("DOMContentLoaded", changeButtonColor);