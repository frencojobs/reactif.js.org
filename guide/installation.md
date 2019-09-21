# Installation

You can install Reactif via [npm](https://npm.im/reactif-core), in just a line

```bash
npm install reactif-core
```

OR you can download or connect directly through the cdn,

```html
<script src="https://unpkg.com/reactif-core@latest/dist/reactif.umd.min.js"></script>
```

Now you can use like that, in browser

```javascript
let sales = Reactif.act({
    price: 5,
    quantity: 2
  });
```

In node.js environment,

```javascript
import { act } from "reactif-core";

// ... Do as much as you can
```
