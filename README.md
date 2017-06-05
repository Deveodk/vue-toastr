# @Deveodk/vue-toastr

<img src="https://cloud.githubusercontent.com/assets/7561792/26641086/c3acfbd6-4629-11e7-8883-600f1cbb7b55.png" width="100%" />

[![npm](https://img.shields.io/npm/v/@deveodk/vue-toastr.svg)](https://www.npmjs.com/package/@deveodk/vue-toastr) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A easy to use toastr plugin inspired by CodeSeven/toastr made without jquery with pure vue.js

# Demo
See a functioning demo
<a href="https://packages.deveo.io/packages/vue/vue-toastr">deveo demo site</a>


## Installation

```bash
npm install --save @deveodk/vue-toastr
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueToastr from '@deveodk/vue-toastr'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// If you would like custom styling of the toastr the css file can be replaced
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

Vue.use(VueToastr)
```

### Browser

```html
<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/@deveodk/vue-toastr/dist/@deveodk/vue-toastr.min.css"></link>
<script src="https://unpkg.com/@deveodk/vue-toastr/dist/@deveodk/vue-toastr.min.js"></script>
```

## Configuration
The toastr defaults can be configured in the following way

Available positions: 
```code
'toast-top-right'
'toast-bottom-right'
'toast-bottom-left'
'toast-top-left'
'toast-top-full-width'
'toast-bottom-full-width'
'toast-top-center'
'toast-bottom-center'
```

Available types: 
```code
'success'
'error'
'info'
'warning'
```


```code
import VueToastr from '@deveodk/vue-toastr'
Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-left',
    defaultType: 'info',
    defaultTimeout: 1000
})
```

## Usage

The `$toastr` prototype hook and how to use it.

```code
# Make a success toastr
this.$toastr('success, 'i am a toastr success', 'hello')
```

```code
# Make a error toastr
this.$toastr('error, 'i am a toastr error', 'hello')
```

```code
# Make a warning toastr
this.$toastr('warning, 'i am a toastr warning', 'hello')
```

```code
# Make a info toastr
this.$toastr('info, 'i am a toastr info', 'hello')
```

```code
# Make a toastr with custom properties
this.$toastr('add, {
  title: 'Heyy', // Toast Title
  msg: 'I am a custom property toastr' // Message
  clickClose: false, // Click Close Disable
  timeout: 1000, // Timeout in ms
  position: 'toast-bottom-full-width', // Toastr position
  type: 'info', // Toastr type
  # Available callbacks
  closeOnHover: On mouse over stop timeout can be boolean; default true
  clickClose: On click toast close can be boolean; default false
  onCreated: On created toast event can be function
  onClicked: On clicked toast event can be function
  onClosed: On closed toast event can be function
  onMouseOver: On mouse over toast event can be function
  onMouseOut: On mouse over toast event can be function
})
```

## example
```code
# Using toastr in real world application
<link rel="stylesheet" href="/@deveodk/vue-toastr/dist/vue-toastr.css"></link>
<script src="/@deveodk/vue-toastr/dist/vue-toastr.js"></script>
<script>
new Vue({
  el: 'body',
  mounted: function () {
      this.showToastr()
   },
  methods: {
    showToastr: function () {
        this.$toastr('success', 'it works!', 'Yeahh'
    }
  }
})
</script>
```


## Special thanks
A special thanks to [s4l1h](https://github.com/s4l1h) for creating the original package. About 30% of the source code is forked from vue-toastr

## License

[MIT](http://opensource.org/licenses/MIT)

![madewithloveandcofee](https://cloud.githubusercontent.com/assets/7561792/26640815/14beb45c-4629-11e7-89db-fbca538a6be5.png)
