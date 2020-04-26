const gamesUrl = "https://api.rawg.io/api/games";

async function fetchImage() {
  try {
    const response = await fetch(gamesUrl);
    const gamesObject = await response.json();
    createGames(gamesObject);
  } catch (error) {
    console.log(error);
  }
}
fetchImage();

function createGames(gamesObject) {
  console.dir(gamesObject);

  const resultContainer = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < gamesObject.length; i++) {
    if (!gamesObject[i].results) {
      continue;
    }

    console.dir(gamesObject[i].results);

    html += `<div>
                    <div class="game">
                    <h2>${gamesObject[i].name}</h2>
                    <img src="url(${gamesObject[i].background_image});" alt="${gamesObject[i].name}" /></div>
                </div>`;
  }

  results.innerHTML = html;
};
