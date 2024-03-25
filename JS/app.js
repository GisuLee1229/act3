import {upProf} from "./info.js"
import {right, bckOne, bckTwo, bckThr} from "./img.js"
import {dwnProf} from "./card.js"


const fSec = {
    title : "Hello! There",
    para : "This anime called SWORD ART ONLINE",
    clickBtn : "Contact Me",
    fImg : "anime1.jpg"
}

const sSec = {
    title1 : "Others Images Of SAO",
    imgOne : "anime2.jpg",
    para1 : "SWORD ART ONLINE is the story of a multiplayer virtual-reality game that takes a deadly turn when players discover they can't escape of their own will but must play to victory or to death.",
    fBtn : "Learn More",
    imgTwo : "anime3.jpg",
    para2 : "The story of the first season follows the adventures of Kazuto (Kirito) Kirigaya and Asuna Yuuki, two players who are trapped in the virtual world of Sword Art Online (SAO). They are tasked to clear all 100 Floors and defeat the final boss in order to be freed from the game.",
    sBtn : "Learn More",
    imgThr : "anime4.jpg",
    para3 : "Sword Art Online was the series name before the series ever visited those games. This isn't unique to SAO, and in fact is pretty common. When a series gets popular under a certain name, they'll stick with that name for recognition's sake.",
    tBtn : "Learn More"
}

const {title, para, clickBtn, fImg } = fSec

const { title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn} = sSec


let container = document.getElementById("sectionOne")
let containers = document.getElementById("sectionTwo")

container.append(upProf(title, para, clickBtn, fImg))
container.append(dwnProf(title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn))