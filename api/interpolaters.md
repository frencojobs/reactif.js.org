The original interpolaters registered by the library. We registered only a little to give you a chance to design what you want. Some interpolaters are registered not because it is hard for the user but to show how you can do. Don't forget that you can rgister a new interpolater by calling the class interpolater.

## Releaser

- **Type**: Object
- **Example**:

```javascript
{
    price: 10,
    qty: 2,
    total: {
        $$type: 'Releaser',
        $$value: (self => self.price*self.qty)
    }
}
// Or alternatively with functions
{
    price: 10,
    qty: 2,
    total: Releaser(self => self.price*self.qty)
}
```

Releaser is the only interpolater originally registered by the library. When the prop is called, the releaser is run and returned the final value.
