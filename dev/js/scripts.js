import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
//import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin);

//INIT
gsap.set("#bottom-1", {autoAlpha:0});

function blockAni(){

    let tl = gsap.timeline();

    tl.to("#bottom-1", {duration:2, ease:"bounce"})
    .to("#left-1", {duration:2, y:"-=500", ease:"bounce"})
    .to("#right-1", {duration:2, y:"-=500", ease:"bounce"})

    ;
    return tl;


}

function lettersAni(){

    let tl = gsap.timeline();

    tl.to("#n", {opacity:0, duration:2, y:100, ease:"bounce"})
    .to("#left-1", {duration:2, y:"-=500", ease:"bounce"})
    .to("#right-1", {duration:2, y:"-=500", ease:"bounce"})

    ;
    return tl;


}


let mainTl = gsap.timeline();
mainTl.add(blockAni())
mainTl.add(lettersAni())

;
