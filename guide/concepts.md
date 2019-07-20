# Concepts

The reactivity done by Reactif is actually by the helps of `Proxy`. You can make the Objects reactive by the function `act`, the core of the library. What the `act` function really did here is accept an object and _an associator_.(We'll cover about the term associator later) and just pass it through a proxy class, so that it becomes reactive.

![](/chart.png)

The Proxy class will define what to do when a trap (getter or setter) is called. It's basically the same as ES5 getters and setters, but more powerful. In Reactif, ES5 getter/setters are used as polyfill for browsers in which the Proxy will not be supported. But some functionalities will not be available such as `deleteProperty` and capablitiy to add properties that instantly will work with the process you defined in each trap.

## Associator

Associator is a term for the function you defined as the second argument in the `act` function, just because it is associated with the traps and the methods you want to work when the traps are called. Simply, it's the place where you have to add these methods aforementioned.

```javascript
let associator = function(dep) {
  dep.set("x", function() {
    console.log(`x just changed it's value`);
  });
};
let data = act(
  {
    x: 1
  },
  associator
);

data.x++; // 'x just changed it's value'
```

Don't be fooled by terms. An associator is just a function with no special properties itself. But when it's used in `act` function, it is powerful.

## Interpolater

When a reactive property is called, it first run all the methods defined in associator, then gave you the value. And it is where the interpolater is rooted. If a property is an object where its config is determined, it is called interpolated. An object is an interpolated if it has the property `$$type`.

```javascript
act({
  message: {
    $$type: "upperCase",
    $$value: "blah blah"
  }
});
// message is an interpolated
// by the interpolater `upperCase`
```

In the example, the property message will not be returned as the original value, but through the function you defined as the interpolater `upperCase`.
You can register interpolaters by calling the calss `interpolater`. You can define configuration as fancy as you want, but even in a simple one it has to have the property `$$type`, that will indentify what interpolater it is in.

```javascript
import { Interpolater } from "reactif-core";

new Interpolater("upperCase", function(config) {
  return config.$$value.toUpperCase();
});
// now you can use the previous example in place, it's good
```

## Releaser

In the first example, you might wonder the use of the releaser function. Well, it is just an interpolater registered by the library. If you just look at the code, what it really does is nothing.

```javascript
function Releaser(fn) {
  return {
    $$type: "Releaser",
    $$value: fn
  };
}
```

It return an object, actually an interpolated object. What the interpolater `Releaser` really does is, it runs the function you defined instantly when the getter is called, I mean when the value is called.
Creating interpolated objects by a function is really neat, clean and make the object more accessible and understandable and it's fully recommended.
