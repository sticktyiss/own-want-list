
const showList = (id) => {
  const homeDiv = document.getElementById("home");
  homeDiv.style.display = "none";
  const dlElement = document.getElementById(id);
  if (dlElement.style.display === "none") {
    dlElement.style.display = "flex"
  } else {
    dlElement.style.display = "none";
  }
};