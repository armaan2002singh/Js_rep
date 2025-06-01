#### PROTOTYPE-BEHAVIOUR

## PROTOTYPE
- Here we will learn what is function and whats its behaviour_?

### default behaviour
- Well js default behaviour is Prototypal behaviour, which means upper to upper. Will not give up if we are finding something, will work parents to parents untill js will not find the null value. Also called inheritance. Now, where it will stop?

```js
const newhero = ['hulk', 'spiderman']
undefined

/*newhero
(2) ['hulk', 'spiderman']
0: "hulk"
1: "spiderman"
length: 2
[[Prototype]]: Array(0)...
[[Prototype]]: Object*/
```
- 
/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
