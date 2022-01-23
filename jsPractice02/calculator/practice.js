const $title = document.querySelector("#title");

function handleTitleClick() {
  const titleColor = $title.style.color;
  let newColor;
  if (titleColor === "blue") {
    newColor = "red"
  } else {
    newColor = "blue"
  }
  $title.style.color = newColor;
}

$title.addEventListener("click", handleTitleClick);