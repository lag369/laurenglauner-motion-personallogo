import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
//import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin);



function blockAni(){

    let tl = gsap.timeline();

    tl.from("#bottom-1", {duration:2, y:"-=500", ease:"bounce"})


}

let mainTl = gsap.timeline();
mainTl.add(blockAni())

;
