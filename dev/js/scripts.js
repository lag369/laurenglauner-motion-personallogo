import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
//import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin);

//INIT
gsap.set("#text-path", {autoAlpha:0});

function textAni(){

    let tl = gsap.timeline();

    tl.from("#logo-text", {duration:2, motionPath:{path:"#text-path",   align:"#text-path"}, ease:"bounce"})

    ;
    return tl;

}

function logoAni(){

    let tl = gsap.timeline();

    tl.from("#bottom-1", {duration:2, motionPath:{path:"#b1-path",   align:"#b1-path"}, ease:"bounce"})
    .from("#left-1", {duration:2, motionPath:{path:"#l1-path", align:"#l1-path"}, ease:"bounce"})
    .from("#right-1", {duration:2, motionPath:{path:"#r1-path", align:"#r1-path"}, ease:"bounce"})
    .from("#bottom-2", {duration:2, motionPath:{path:"#b2-path",   align:"#b2-path"}, ease:"bounce"})
    .from("#left-2", {duration:2, motionPath:{path:"#l2-path",   align:"#l2-path"}, ease:"bounce"})
    .from("#right-2", {duration:2, motionPath:{path:"#r2-path",   align:"#r2-path"}, ease:"bounce"})
    .from("#top-2", {duration:2, motionPath:{path:"#t2-path",   align:"#t2-path"}, ease:"bounce"})
    .from("#top-1", {duration:2, motionPath:{path:"#t1-path",   align:"#t1-path"}, ease:"bounce"})

    ;
    return tl;

}


let mainTl = gsap.timeline();
mainTl.add(textAni())
mainTl.add(logoAni())

;
