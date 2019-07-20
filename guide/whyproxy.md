# Why Proxy instead of `defineProperty`

Proxy becomes a valid original class of javascript when ES6 is declared. It's a class and you can use it to define custom behaviours of objects. It interpolates the connection between the original object and client calls. It works simply and basically the same as getters/setters, but is more powerful.
::: tip Terminological Tip
target = the original object

traps = the getters/setters and similar things

handler = where you define traps
:::

By getters/setters, we can only define functions for the properties that only existed in the object. But that is no longer a problem in the case with a Proxy. This is how it looks like with getters/setters.

```javascript
let data = { a: 0 };
// define a getter to log 'Hello'
// then add a new value
data.b = 0;

console.log(a); // Logged 0 && 'Hello'
console.log(b); // Logged only 0
```

And this is how it is with Proxy.

```javascript
let data = { a: 0 };
// define a Proxy to log 'Hello'
// then add a new value
data.b = 0;

console.log(a); // Logged 0 && 'Hello'
console.log(b); // Logged 0 && 'Hello'
```

That's enough reason to choose Proxy over 'getters/setters'.

## deleteProperty

Proxy has enough, numerous number of traps to intercepts objects to define reactive-ness. You can define a trap to intercetps 'in' operator, and delete operations. That's why `delete` method is not supported in some browsers. If your browser supported Proxy, you can use delete method.

## Why not Proxy

There's only a reason why we should not use proxy in place of getters/setters. That is because it is not widely supported. For example, Internet Explorer absolutely does not support Proxy, not even a little, not even the basic properties.
