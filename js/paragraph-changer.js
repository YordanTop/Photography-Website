let paragraph = ["photo-shooting-paragragh","social-media-photography-paragragh","professional-recording-paragragh","editing-paragragh"];
let hover_buttons = ["photo-shooting","social-media-photography","professional-recording","editing"];

class Paragragh_maker{

  changeParagragh(button,text){
document.getElementById(button).addEventListener("mouseover", ()=>{
setTimeout(() => {
  	document.getElementById("hover-info").style.display = "none";
  	document.getElementById(text).style.display = "block";
},700);
});
document.getElementById(button).addEventListener("mouseout", ()=>{
setTimeout(() => {
    	document.getElementById(text).style.display = "none";
    	document.getElementById("hover-info").style.display = "block";
},700);
});
}
}

let p_maker = new Paragragh_maker();

for (let i = 0; i<=3; i++) {
 p_maker.changeParagragh(hover_buttons[i],paragraph[i]);	
}