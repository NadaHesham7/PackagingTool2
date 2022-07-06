import "./style.css";
const element = document.createElement("header");
element.innerHTML = "Hello to my Project";
element.classList.add('info')
document.body.appendChild(element);
import photo from '../../assets/google.png'
const image = document.createElement("image");
image.src = photo;
image.style.width = "300px"
image.style.height = "300px"
element.appendChild(image);





