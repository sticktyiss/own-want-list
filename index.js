
const showList = (id) => {
  const menu = document.getElementById(id);
  const dlElement = menu.nextElementSibling;
  if (dlElement.style.display === "none") {
    dlElement.style.display = "flex"
  } else {
    dlElement.style.display = "none";
  }
};