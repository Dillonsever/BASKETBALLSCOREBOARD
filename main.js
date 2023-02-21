let scorehome = document.getElementById("scorehome")
let scoreaway = document.getElementById("scoreaway")
let homescore = 0
let awayscore = 0

function home1(){
    homescore += 1
    scorehome.textContent = homescore
}
function home2(){
    homescore += 2
    scorehome.textContent = homescore
}
function home3(){
    homescore += 3
    scorehome.textContent = homescore
}
function away1(){
    awayscore += 1
    scoreaway.textContent = awayscore
}
function away2(){
    awayscore += 2
    scoreaway.textContent = awayscore
}
function away3(){
    awayscore += 3
    scoreaway.textContent = awayscore
}

function reset(){
    homescore = 0
    awayscore = 0
    scoreaway.textContent = 0
    scorehome.textContent = 0
}