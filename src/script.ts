let menuIcon = document.querySelector("#menu-icon") as HTMLButtonElement
let navbar = document.querySelector(".navbar") as HTMLDivElement

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}
