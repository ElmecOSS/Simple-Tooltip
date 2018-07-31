# Simple-Tooltip

> Vue.js simplified tooltip directive popover

### Documentation

Basically usage, the tooltip will be positioned on top
```html
<span v-tooltip="'This is the tooltip'">Hover me</span>
```

But you can also pass the position parameter [top, bottom, left, right]:
 ```html
 <span v-tooltip:bottom="'This tooltip will appear at bottom'">Hover me</span>
 ```

If you need to insert more complex strings or elements, you can pass html purpose:
 ```html
 <span v-tooltip:bottom="'<a href='https://google.com'><button>Link Button</button></a>'">Hover me</span>
 ```
> **! Note:** Tooltip will change the parent element's **CSS** in  `position: relative`
### Example Usage
```html
<template>
  <div id="app">
    <div v-tooltip:right="'This is a tooltip'">
    </div>
  </div>
</template>

<script>
  import tooltip from 'simple-tooltip'
  export default {
    name: 'app',
    directives: {tooltip}
  }
</script>
```


### License

The code is available under the [GNU GPL v3.0](LICENSE) license.
