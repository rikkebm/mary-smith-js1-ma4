const gamesUrl = "https://api.rawg.io/api/games/4200";

async function fetchImage() {
  try {
    const response = await fetch(gamesUrl);
    const gamesObject = await response.json();
    createGameDetails(gamesObject);
  } catch (error) {
    console.log(error);
  }
}
fetchImage();

function createGameDetails(gamesObject) {
  console.dir(gamesObject);
  console.log(gamesObject.background_image);

  const image = document.getElementsByClassName("image");
  console.log(image);
  image.style.backgroundImage = url($ {
    gamesObject[i].background_image
  });

}
