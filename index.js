
const showList = (id) => {
  const homeDiv = document.getElementById("home");
  const booksDiv = document.getElementById("books");
  const boardGamesDiv = document.getElementById("boardGames");
  const comicsDiv = document.getElementById("comics");
  const collectiblesDiv = document.getElementById("collectibles");
  homeDiv.style.display = "none";
  booksDiv.style.display = "none";
  boardGamesDiv.style.display = "none";
  collectiblesDiv.style.display = "none";
  comicsDiv.style.display = "none";
  const dlElement = document.getElementById(id);
  if (dlElement.style.display === "none") {
    dlElement.style.display = "flex"
  } else {
    dlElement.style.display = "none";
  }
};