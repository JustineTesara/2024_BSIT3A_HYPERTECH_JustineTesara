const typedText = document.getElementById('typed-text');
const text = "Hi, Im Justine";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 75); // Adjust typing speed by changing the timeout value
  }
}

typeWriter();