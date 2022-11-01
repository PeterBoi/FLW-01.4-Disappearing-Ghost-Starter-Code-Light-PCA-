//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghost = document.querySelector(".ghost-image");

//declare variables for all of the buttons
let hideMe = document.querySelector(".hide-button");
let showMe = document.querySelector(".show-button");
let updateImage = document.querySelector(".update-img-button");
let sendMessage = document.querySelector(".message-button");
let message = document.querySelector(".message");
let nameMe = document.querySelector(".name-button");
let background1 = document.querySelector(".back1-button");
let background2 = document.querySelector(".back2-button");

//create an onclick event for the Hide Me button
/*hide button variable*/
hideMe.onclick = (function (){  
  ghost.style.display = ("none");
});

//create an onclick event for the Show Me button
showMe.onclick = (function (){
  ghost.style.display = ("initial");
})


//create an onclick event for the Update Img button
updateImage.onclick = (function(){
  ghost.src = ("https://media1.giphy.com/media/kSFWKgsdyB0SSdMxap/giphy.gif?cid=ecf05e474yc8b7lc8lfrtupurgrz4s06tk7hbn3dbw55gljf&rid=giphy.gif&ct=s");
})


//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag
sendMessage.onclick = (function (){
  userInput = input.value;
  message.insertAdjacentHTML('beforeend', userInput);
})


//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
nameMe.onclick = (function (){
  userInput = input.value;
  h1.innerHTML = `${userInput}`;
})

background1.onclick =(function (){
  ghost.style.backgroundColor = ("black");
})

background2.onclick =(function (){
  ghost.style.backgroundColor = ("blue");
})