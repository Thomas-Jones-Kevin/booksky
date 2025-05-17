// If the plus button is clicked, then the popup overlay
// has to come along with the popup input by making
// the display as block from none

var popupOverlay = document.querySelector('.popup-overlay')
var popupBox = document.querySelector('.popup-input')
var btn = document.getElementById('add-popup')
var btn1 = document.getElementById('cancel-book')

btn.addEventListener("click", function() {
    popupOverlay.style.display = "block"
    popupBox.style.display = "block"
})

btn1.addEventListener("click", function(event) {
    event.preventDefault()
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
})

// Add button to add the details of the book to the app
var cont = document.querySelector(".container")
var addb = document.getElementById("add-book")
var name1 = document.getElementById("name-input")
var author1 = document.getElementById("author-input")
var des1 = document.getElementById("description")

addb.addEventListener("click", function(event) {
    event.preventDefault()

    var div1 = document.createElement("div")
    div1.setAttribute("class", "book1")

    div1.innerHTML = `
        <h2>${name1.value}</h2>
        <h3>${author1.value}</h3>
        <p>${des1.value}</p>
        <button class="remove-btn" onclick="del(event)">Close</button>
    `

    cont.append(div1)

    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
    name1.value = ''
    author1.value = ''
    des1.value = ''
})

function del(event){
    event.target.parentElement.remove()
}


document.getElementById("login-btn").addEventListener("click", function () {
  document.getElementById("login-popup").style.display = "block";
});

document.getElementById("signup-btn").addEventListener("click", function () {
  document.getElementById("signup-popup").style.display = "block";
});

function closeAuth(id) {
  document.getElementById(id).style.display = "none";
}
