$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 4) {
      $("nav").addClass("bg-dark");

    } else {
      $("nav").removeClass("bg-dark");

    }
  });
});

const faders = document.querySelectorAll(".fade-in"); //select all fade in Classes
const sliders = document.querySelectorAll(".slide-in");//select all slide in classes
const counters = document.querySelectorAll(".number"); //select all number classes
const counters2 = document.querySelectorAll(".number2"); //select all number classes


const appearOptions = {
  threshold: 0.30, //45% of the screen should be in vieport to fade in
  rootMargin: "0px 0px -30px 0px" //reduce viewport size
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) //creating IntersectionObserver
{
    entries.forEach(entry => {
      if(!entry.isIntersecting) //if not intersecting with page
      {

      }
      else
      {
          entry.target.classList.add('appear'); //adding class appear
          if(entry.target.classList.contains('number')) //checking if Count Up number
          {
              setTimeout(function(){
                countUp_1.start(); //starting counter
                countUp_2.start();
                countUp_3.start();
              },1100);
          }
          //appearOnScroll.unobserve(entry.target);
          if(entry.target.classList.contains('number2')) //checking if Count Up number
          {
                countUp_4.start(); //starting counter
                countUp_5.start();
                countUp_6.start();
          }
      }
    })
},appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader); //adding observe to all fader
})

sliders.forEach(slider=> {
  appearOnScroll.observe(slider);  //adding observe to all slider
})

const countUp_1 = new CountUp('number1',0,1470,0,3); //creating countUp objects for Counting Animaiton
const countUp_2 = new CountUp('number2',0,2000,0,3); //CountUp(id,startval,endval,decimalpoints,duration)
const countUp_3 = new CountUp('number3',0,3040,0,3);
const countUp_4 = new CountUp('number4',0,1470,0,3); //creating countUp objects for Counting Animaiton
const countUp_5 = new CountUp('number5',0,2000,0,3); //CountUp(id,startval,endval,decimalpoints,duration)
const countUp_6 = new CountUp('number6',0,3040,0,3);



counters.forEach(counter => {
  appearOnScroll.observe(counter); //adding observe to all counters
})

counters2.forEach(counter => {
  appearOnScroll.observe(counter);
})
