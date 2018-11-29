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
```js
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
```js
'success'
'error'
'info'
'warning'
```


```js
import VueToastr from '@deveodk/vue-toastr'
Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-left',
    defaultType: 'info',
    defaultTimeout: 1000
})
```

## Usage

The `$toastr` prototype hook and how to use it.

```js
// Make a success toastr
this.$toastr('success', 'i am a toastr success', 'hello')
```

```js
// Make a error toastr
this.$toastr('error', 'i am a toastr error', 'hello')
```

```js
// Make a warning toastr
this.$toastr('warning', 'i am a toastr warning', 'hello')
```

```js
// Make a info toastr
this.$toastr('info', 'i am a toastr info', 'hello')
```

```js
// Make a toastr with custom properties
this.$toastr('add', {
  title: 'Heyy', // Toast Title
  msg: 'I am a custom property toastr' // Message
  timeout: 1000, // Timeout in ms
  position: 'toast-bottom-full-width', // Toastr position
  type: 'info', // Toastr type
  closeOnHover: true, // On mouse over stop timeout can be boolean; default true
  clickClose: false, // On click toast close can be boolean; default false
  // Available callbacks
  onCreated: () => console.log('toast was created'),
  onClicked: () => console.log('toast was clicked'),
  onClosed: () => console.log('toast was closed'),
  onMouseOver: () => console.log('toast was moused over'),
  onMouseOut: () => console.log('mouse left the toast')
})
```

## example
```js
// Using toastr in real world application
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
        this.$toastr('success', 'it works!', 'Yeahh')
    }
  }
})
</script>
```


## Special thanks
A special thanks to [s4l1h](https://github.com/s4l1h) for creating the original package. About 30% of the source code is forked from vue-toastr

## License

[MIT](http://opensource.org/licenses/MIT)

[![Deveo](https://s3-eu-west-1.amazonaws.com/rk-solutions/github_footer.png)](https://deveo.dk)
