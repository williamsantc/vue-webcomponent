# vue-webcomponent

Proyecto ejemplo de webcomponents com Vue.js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles WebComponent
```
npm run build
```

### Run 
```
npm run start
```

Access:
```
http://localhost:8080/demo.html
```

### Playground

````html
<custom-input id="cusInput"></custom-input>
<script>
  const customInput = document.getElementById('cusInput')
  customInput.addEventListener('value', (event) => console.log(event.detail))
</script>
````

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
