<script setup>
import Card from './components/Card.vue'
</script>

<template>
  <div class="container">
    <Card/>
  </div>
</template>

<style lang="scss">
*{
  margin :0;
  padding:0;
  box-sizing: border-box;
}
body{
  background-color: $primary1;
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("./assets/pattern-background-mobile.svg");
  background-repeat:repeat-x;
}
@media screen and (min-width:376px){
  body{
    background-image: url("./assets/pattern-background-desktop.svg");
  }

}
</style>
