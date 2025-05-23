# solution-Code

## Project - 6 Unlimited colors.
#### HTML-Code 
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <main>
      <h1>Chai aur code</h1>
      <div class="projects">
        <a class="project-link" style="" href="./1-colorChanger/index.html"
          >Project 1 - color Changer 🔥</a
        >
        <a class="project-link" href="./2-BMICalculator/index.html"
          >Project 2 - BMI Generator ☕️</a
        >
        <a class="project-link" href="./3-DigitalClock/index.html"
          >Project 3 - Digital clock 😎</a
        >
        <a class="project-link" href="./4-GuessTheNumber/index.html"
          >Project 4 - Guess the number 🤨</a
        >
        <a class="project-link" href="./5-keyboard/index.html"
          >Project 5 - Keyboard check 👻</a
        >
        <a class="project-link" href="./6-unlimitedColors/index.html"
          >Project 6 - Unlimited Colors 🧠
        </a>
        <a class="project-link" href="./7-scroll/index.html"
          >Project 7 - Scroll like NextJS 👀</a
        >
        <a class="project-link" href="./8-typer/index.html"
          >Project 8 - Your typer library 📚
        </a>
        <a class="project-link" href="./9-mouseCircle/index.html"
          >Project 9 - Mouse Circle 📚
        </a>
        <a class="project-link" href="./10-emoji/index.html"
          >Project 10 - Emoji 🫥
        </a>
        <a class="project-link" href="./11-textEditor/index.html"
          >Project 11 - Text Editor ✍️
        </a>
        <a class="project-link" href="./12-randomImage/index.html"
          >Project 12 - Random Image 🌠
        </a>
        <a class="project-link" href="./13-jokes/index.html"
          >Project 13 - Jokes 😂
        </a>
        <a class="project-link" href="./14-cats/index.html"
          >Project 14 - cats 🐈
        </a>
        <a class="project-link" href="./15-crudDom/index.html"
          >Project 15 - DOM Crud 📌
        </a>
        <a class="project-link" href="./16-debounce/index.html"
          >Project 16 - Debouncing 🏀
        </a>
      </div>
    </main>
  </body>
</html>

```

#### Js-code
``` JavaScript
// generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }return color
};

//console.log(randomColor())
//console.log(Math.floor(Math.random() * 16)); // will show the floor value and it will cut the floot digits.
let intervalId;
//start
const startChangingColor = function(){
  function changeBackgroundColor(){
    document.body.style.backgroundColor = randomColor()
  }
  if(!intervalId)
  {intervalId = setInterval(changeBackgroundColor,1000)}
  //console.log(intervalId)
  
}

document.querySelector('#start').addEventListener('click', startChangingColor)

//stop
const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null; // to flush-out, also to avoid over-writing of this variable.
  //console.log(intervalId)// printing the null.

}

document.querySelector('#stop').addEventListener('click', stopChangingColor)
```

