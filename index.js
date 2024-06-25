const homeDiv = document.getElementById("home");
const booksDiv = document.getElementById("books");
const boardGamesDiv = document.getElementById("boardGames");
const comicsDiv = document.getElementById("comics");
const collectiblesDiv = document.getElementById("collectibles");
const legend = document.querySelector(".legend");
const legendGroup = document.querySelector("#legendGroup");

const showList = (id) => {
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
  };
  //show legend on Book page only
  if (id === "books") {
    legend.style.display = "block";
  } else {
    legend.style.display = "none";
  };
};

legend.addEventListener(
  "mouseover",
  () => legendGroup.style.display = "flex"
);
legend.addEventListener(
  "mouseout",
  () => legendGroup.style.display = "none"
);