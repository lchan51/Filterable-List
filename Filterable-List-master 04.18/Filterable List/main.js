const filter = document.querySelector("#filter");
const filterNames = () => {
  const value = filter.value;
  const names = document.querySelectorAll("li a");

  for (let name of names) {
    if (names.innerText.toUpperCase().includes(value.toUpperCase())) {
      names.parentElement.style.display = "block";
    } else {
      names.parentElement.style.display = "none";
    }
  }
  filter.addEventListener("keyup", filterNames);
};
