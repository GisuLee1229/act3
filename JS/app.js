import {upProf} from "./info.js"
import {right, bckOne, bckTwo, bckThr} from "./img.js"
import {dwnProf} from "./card.js"


const fSec = {
    title : "Hello! Luigi",
    para : "This is an activity that was asked from us to do",
    clickBtn : "Contact Me",
    fImg : "OIP.jpg"
}

const sSec = {
    title1 : "PROJECT COMPLETED",
    imgOne : "OIP1.jpg",
    para1 : "The airport infrastructure necessarily assumes the presence of lighting and radio electronic devices and systems necessary to ensure the safety of aircraft flights.",
    fBtn : "Learn More",
    imgTwo : "OIP4.jpg",
    para2 : "Computer Infrastructure means all computers, networks, printers, operating systems, and telecommunications systems used by Customer in the operation of the Licensed Program.",
    sBtn : "Learn More",
    imgThr : "OIP4.jpg",
    para3 : "Road infrastructure includes physical assets like the roads themselves, as well as everything associated with them, for example bus stops, trucking terminals, signage, drainage, and structures such as bridges or tunnels.",
    tBtn : "Learn More"
}

const {title, para, clickBtn, fImg } = fSec

const { title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn} = sSec


let container = document.getElementById("sectionOne")
let containers = document.getElementById("sectionTwo")

container.append(upProf(title, para, clickBtn, fImg))
container.append(dwnProf(title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn))