<template>
    <div id="app">
  
      <cell-automata/>

      <div class="logo-container">
        <h1>Tom Tier</h1>
      </div>
  
    </div>
</template>

<script>
import CellAutomata from './CellAutomata.vue';

export default {
  name: 'HelloWorld',
    components: {
        CellAutomata,
    }
}

</script>

<style>
@font-face {
  font-family: 'Pixellari';
  src: url('~@/assets/Pixellari.ttf');
}

.logo-container {
    height: 100%;
    display: flex;
}

h1 {
    font-size: 10vw;
    color: white;
    font-family: 'Pixellari', 'Georgia', serif; 
}
</style>
