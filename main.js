const allCards = document.querySelectorAll(".card")
const Boxes = document.querySelectorAll(".box")


const getNearestCard = (box,distance) => {
  // console.log("box",box.children)
  const offsets = [...box.children].filter(child =>  {if((distance-box.offsetTop) - (child.offsetTop) > 0){
    return child
  }  })
  
  return offsets.length ? offsets.pop() : null;

}

allCards.forEach((card) => {
  card.addEventListener("dragstart", e => {
    card.classList.add("dragging")
  })
  card.addEventListener("dragend", e => {
    card.classList.remove("dragging")

  })
})

Boxes.forEach(box => {
  box.addEventListener("dragover",  e => {
    e.preventDefault();
    let currentSelection = document.querySelector(".dragging")
    let nearestCard = getNearestCard(box,e.clientY)
    if(nearestCard){
      box.insertBefore(currentSelection,nearestCard.nextSibling)
    }else{
      box.insertBefore(currentSelection,box.firstChild)
    }
  })
} )


