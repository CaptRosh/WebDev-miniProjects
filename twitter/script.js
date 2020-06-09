var username = document.getElementById("username")
var password = document.getElementById("password")
var log = document.getElementById("submit")
var und = document.getElementsByClassName("underline")
var lbl = document.getElementsByClassName("lbl")
var inp = document.getElementsByTagName("input")

function check() {
    if(username.value==""|| password.value==""){
        log.className = "notFilllb"
    } else {
        log.className = "filllb"
    }
}

function focUser() {
    und[0].classList.add("fillSpan")
    lbl[0].classList.add("focUser")
}

function focPass() {
    und[1].classList.add("fillSpan")
    lbl[1].classList.add("focUser")
}


function blurUser() {
    und[0].classList.remove("fillSpan")
    lbl[0].classList.remove("focUser")
}

function blurPass() {
    und[1].classList.remove("fillSpan")
    lbl[1].classList.remove("focUser")
}


inp[0].addEventListener('blur', check)
inp[1].addEventListener('blur', check)
inp[2].addEventListener('blur', check)
username.addEventListener('focus', focUser)
password.addEventListener('focus', focPass)
username.addEventListener('blur', blurUser)
password.addEventListener('blur', blurPass)