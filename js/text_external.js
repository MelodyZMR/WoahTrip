var scrollText = document.getElementById("scroll-Text");
var texts= ['Welcome to NEW ZEALAND'];
var index= 0;

setInterval(function(){
    scrollText.textContent = texts[index];
   index = (index + 1) % texts.length;
},3000);