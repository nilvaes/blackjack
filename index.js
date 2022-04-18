let player = {
    name: "Sebas",
    chips: 195
}
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": " + player.chips + "€"

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if ( isAlive === true && sum < 21) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

let hands = ["rock", "paper", "scissor"]

function item() {
    let randomHand = Math.floor(Math.random() * 3)
    return hands[randomHand]
}

console.log(item())



// let dayOfMonth = 31
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("uga buga")
// }





// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)




// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// for (i = 0; i < largeCountries.length; i++) {
    
//     //let boomer = "- "
//     //console.log(boomer + largeCountries[i])
//     console.log("- " + largeCountries[i])
// }



// let age = 70

// if (age < 6) {
//     console.log("Free!")
// } else if (age < 18) {
//     console.log("Child Discount.")
// } else if (age < 27) {
//     console.log("Student Discount.")
// } else if (age < 67) {
//     console.log("Full Price.")
// } else {
//     console.log("Senior Citizen Discount.")
// }





// let person = {
//     name: "Sebas",
//     age: 21,
//     country: "Germany"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()


// let airbnbCastle = {
//     title: "i don't care",
//     isCheap: true,
//     price: 199,
//     tags: ["castle", "cheap"]

// }

// console.log(airbnbCastle.title)
// console.log(airbnbCastle.isCheap)

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if ( hasSolvedChallenge === true || hasHintsLeft ===  false) {
//     showSolution()
// }


// function showSolution() {
//     console.log("Showing the solution...")
// }

// let likesDocumentaries = true
// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }





// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// Math.random() gives to user a random number that looks long
// (between 0 and 1, not inclusive of 1)

//Math.random() * 6 gives to user a random number between
//0 and 6 (6 is not inclusive)


// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)
//Math.floor() removes the decimals


// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     return randomNumber
// }

// console.log( rollDice() )





// let player1Time = 102
// let player2Time = 107

// function totalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = totalRaceTime()
// console.log(totalTime)



// let sentence = ["Hellow", "my", "name", "is", "Sebas"]
// let greetingEl = document.querySelector("#greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent +=  sentence[i] + " "
// }




// let qwards = [7, 3, 9]
// for (let i = 0; i < qwards.length; i++) {
//     console.log(qwards[i])
// }




//    START         FINISH      STEP-SIZE
// for( let count = 10; count < 21; count += 1) {
//     console.log(count)
// }

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }



// let education = [
//     "Kindergarten",
//     "Middle School",
//     "Highschool"
// ]

//  let aboutMe = [
//      "Sebas",
//      21,
//      true
//  ]

// let me = ["sebas", 21, true]




// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// messages.pop()
// console.log(messages)





// console.log(sum)


// let age = 22

// if (age < 21) {
//   console.log("You can not enter the club!")
// } else {
//   console.log("Welcome!")
// }


// let age = 100

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }
