const degreeToRadian = angle => {
    return angle * (Math.PI / 180);
}

const pointOnCircle = (radius, angle = 0) => {
    // move y a little higher to align with clock face
    const Y_OFFSET = 15;
    const xPos = radius * Math.cos(degreeToRadian(angle));
    const yPos = radius * Math.sin(degreeToRadian(angle)) - Y_OFFSET;
    return {
        x: xPos,
        y: yPos
    }
}

const RADIUS = 170;
const DIAMETER = RADIUS * 2;

const mainContainer = document.querySelector(".analog-clock");
const circle = document.createElement("div");
mainContainer.appendChild(circle);
circle.classList.add("numberContainer");
circle.style.width = `${DIAMETER}px`;
circle.style.height = `${DIAMETER}px`;

const numbers = document.querySelector(".numbers");
const numbersText = numbers.innerText;
const numberArray = numbersText.split(" ");
numbers.innerText = "";

const startAngle = -90;
const endAngle = 270;
const angleRange = endAngle - startAngle;

const deltaAngle = angleRange / numberArray.length;
let currentAngle = startAngle;

numberArray.forEach((number, index) => {
    const numberElement = document.createElement("span");
    numberElement.innerText = number;
    circle.appendChild(numberElement);

    let {x: xPos, y: yPos} = pointOnCircle(RADIUS, currentAngle);

    xPos += RADIUS;
    yPos += RADIUS;

    const translate = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${index * deltaAngle}deg)`;

    numberElement.style.transform = `${translate}`;

    currentAngle += deltaAngle;

});