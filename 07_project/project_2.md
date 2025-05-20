# solution-Code

## Project - 1 
#### Js-Code 
```javaScript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()// to stop the default submission of form.

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')
  // we are writing the value inside of this event to call the values instantly and also after submission the page will reload and the empty value will be stored in the input field.
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`
  }
  else{
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>Here is the value of BMI = ${BMI}</span>`

      // to change other component of the page 

    const underW = document.querySelector('#underW')

    const normalW = document.querySelector('#normalW')

    const overW = document.querySelector('#overW')

    if(BMI < 18.6){
      underW.innerHTML = `<p>Under Weight ${BMI} less than 18.6<p>`
    }else{
      underW.innerHTML= `<p>Is not Under Weight<p>`
  }

    if(BMI > 18.6 && BMI < 24.9){
      normalW.innerHTML = `<p>Normal Range ${BMI} <p>`
    }else{
      normalW.innerHTML= `<p>Should be in between 18.6 and 24.9<p>`
    }

    if(BMI > 24.9){
      overW.innerHTML = `<p>Over Weight ${BMI} <p>`
    }else{
      overW.innerHTML= `<p>Is less then 24.9<p>`
    }

  }

})
```
#### HTML-code
``` HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p id="underW" >Under Weight = Less than 18.6</p>
          <p id="normalW">Normal Range = 18.6 and 24.9</p>
          <p id="overW">Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>

 ```

#### CSS-code
``` css
.container {
  width: 575px;
  height: 825px;

  background-color: #797978;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 20px;
  margin-left: 20px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}

```