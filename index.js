
const showList = (id) => {
  const dlElement = document.getElementById(id);
  if (dlElement.style.display === "none") {
    dlElement.style.display = "flex"
  } else {
    dlElement.style.display = "none";
  }
};