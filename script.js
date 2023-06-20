const showJourneyBoardIcon = document.getElementById("show-journey-board");

function showJourneyBoard() {
  let isOpen = false;

  return function inner() {
    const journeyBoard = document.querySelector(".journey-board");
    const journeyArrow = document.getElementById("journeyArrow");
    const journeyNumber = document.getElementById("journeyNumber");

    if (isOpen) {
      journeyBoard.classList.remove("expand");
      journeyArrow.classList.replace("fa-arrow-left", "fa-arrow-right");
      journeyNumber.style.display = "flex";
      isOpen = false;
    } else {
      journeyBoard.classList.add("expand");
      journeyArrow.classList.replace("fa-arrow-right", "fa-arrow-left");
      journeyNumber.style.display = "none";
      isOpen = true;
    }
  };
}

let expandMenu = showJourneyBoard();

showJourneyBoardIcon.addEventListener("click", expandMenu);
