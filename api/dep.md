## get

- **Type**: Function
- **Example**:

```javascript
// associator
function(dep){
    dep.get('prop',function(){
        // What to Do ..
    })
}
```

This trap will work before the value is returned.

## set

- **Type**: Function
- **Example**:

```javascript
// associator
function(dep){
    dep.set('prop',function(){
        // What to Do ..
    })
}
```

This trap will run immediately ater the value is changed to another value.

## del <Badge type="warn">not full supported</Badge>

- **Type**: Function
- **Example**:

```javascript
// associator
function(dep){
    dep.del('prop',function(){
        // What to Do ..
    })
}
```

This trap will work after the value is deleted.

## common

- **Type**: Function
- **Priority**: top
- **Methods**: [ get, set, del ]
- **Example**:

```javascript
// associator
function(dep){
    dep.common('set',function(){
        // What to Do ..
    })
}
```

This traps will allow user to push traps that will work for all props.

## past

- **Type**: Function
- **Example**:

```javascript
// associator
function(dep){
    dep.past('prop')
}
```

This method will return the past value of a property, if there's none, return undefined.

## add

- **Type**: Function
- **Example**:

```javascript
// associator
function(dep){
    dep.add('prop','value')
}
```

Allows user to add new props that will work for both Proxy supported browsers and others.
