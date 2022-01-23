const $title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if ($title.classList.contains(clickedClass)) {
    $title.classList.remove(clickedClass);
  } else {
    $title.classList.add(clickedClass);
  }
}

$title.addEventListener("click", handleTitleClick);