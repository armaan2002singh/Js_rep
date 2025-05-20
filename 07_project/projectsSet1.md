# it is an markdowm file 
## project link --
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## project code

## Project-1 Color Scheme Switcher
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  //console.log(button);
  button.addEventListener('click', function(e){
     //console.log(e)
     //console.log(e.target)
    //  if(e.target.id === 'grey'){
    //    body.style.backgroundColor = e.target.id
    //  }

    if(e.target.id === e.target.id){
      body.style.backgroundColor = e.target.id;
    }
    // switch(e.target.id){
    //   case e.target.id:
    //     body.style.backgroundColor = e.target.id;
    //     break;
    // }

  })
})
```