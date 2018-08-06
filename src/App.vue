<template>
  <div id="app">
    <h1>
      <div style="width: 900px;">
        <a v-if="green === true" style="display: inline-block; width: 300px; height: 100px; background-color: green;" ><button v-tooltip="'Verde asd asdasfdasdafdsfdfasdasdad asdasdadsd asdasdasda'">GREEN</button></a>
        <a v-else style="display: inline-block; width: 300px; height: 100px; background-color: yellow;" ><button v-tooltip="text">YELLOW</button></a>
        <a v-if="red === true" v-tooltip:bottom="'<span class=\'pippo\'><div>Rosso</div></span>'" style="display: inline-block; width: 300px; height: 100px; background-color: red;" ><button v-tooltip:left="'<span class=\'pippo\'>Rosso</span>'">RED</button></a><br>
        <button @click="green = !green">Green</button><br>
        <button @click="red = !red">Red</button>
      </div>
    </h1>
  </div>
</template>

<script>
  import tooltip from './index'
  export default {
    name: 'app',
    data () {
      return {
        red: true,
        green: true,
        text: 'Testo custom aggiunto Testo custom aggiunto Testo custom aggiunto '
      }
    },
    directives: {tooltip}
  }
</script>

<style>
  .pippo {
    vertical-align: middle;
    color: red;
    font-size: 7px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
