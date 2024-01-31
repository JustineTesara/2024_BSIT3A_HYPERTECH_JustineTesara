
var i = 0;
var txt = "Hi there! 👋 I'm Justine Tesara, a passionate college programmer based in BU Polangui I love coding, and I'm on a journey to create meaningful websites. I'm at the gym when I'm not studying in class. Let's connect and explore the exciting possibilities together!";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


