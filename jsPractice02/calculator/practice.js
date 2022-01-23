const $title = document.querySelector("#title");

function handleTitleClick() {
  if ($title.style.color === "red") {
    $title.style.color = "blue"
  } else {
    $title.style.color = "red"
  }
}

$title.addEventListener("click", handleTitleClick);


