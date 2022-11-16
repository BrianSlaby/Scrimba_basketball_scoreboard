const onePointBtnHome = document.getElementById("one-pnt-btn-home")
const twoPointBtnHome = document.getElementById("two-pnt-btn-home")
const threePointBtnHome = document.getElementById("three-pnt-btn-home")

const onePointBtnGuest = document.getElementById("one-pnt-btn-guest")
const twoPointBtnGuest = document.getElementById("two-pnt-btn-guest")
const threePointBtnGuest = document.getElementById("three-pnt-btn-guest")

let currentHomeScore = 0
let currentGuestScore = 0


const homeScoreDisplay = document.getElementById("home-score-display")
const guestScoreDisplay = document.getElementById("guest-score-display")

function displayLead() {
    if (currentHomeScore === currentGuestScore) {
        homeScoreDisplay.classList.remove("lead-display")
        guestScoreDisplay.classList.remove("lead-display")
    } else if (currentHomeScore > currentGuestScore) {
        homeScoreDisplay.classList.add("lead-display")
        guestScoreDisplay.classList.remove("lead-display")
    } else {
        homeScoreDisplay.classList.remove("lead-display")
        guestScoreDisplay.classList.add("lead-display")
    }
}

onePointBtnHome.addEventListener("click", function() {
    currentHomeScore += 1
    homeScoreDisplay.textContent = currentHomeScore
    displayLead()
})

twoPointBtnHome.addEventListener("click", function() {
    currentHomeScore += 2
    homeScoreDisplay.textContent = currentHomeScore
    displayLead()
})

threePointBtnHome.addEventListener("click", function() {
    currentHomeScore += 3
    homeScoreDisplay.textContent = currentHomeScore
    displayLead()
})


onePointBtnGuest.addEventListener("click", function() {
    currentGuestScore += 1
    guestScoreDisplay.textContent = currentGuestScore
    displayLead()
})

twoPointBtnGuest.addEventListener("click", function() {
    currentGuestScore += 2
    guestScoreDisplay.textContent = currentGuestScore
    displayLead()
})

threePointBtnGuest.addEventListener("click", function() {
    currentGuestScore += 3
    guestScoreDisplay.textContent = currentGuestScore
    displayLead()
})
