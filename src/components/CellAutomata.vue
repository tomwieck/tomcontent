<template>
    <div>
    </div>
</template>

<script>

export default {
  name: 'CellAutomata',
  data: function() {
    return {
      octaves: 10,
      colors: [],
    }
  },
  created() {


      console.log(Math.floor(Math.random() * 255));
      for (let i = 0; i < 3; i++) {
        // create 3 random numbers
        this.$nextTick(() => {
          this.colors.push(Array.from({length: 3}, () => Math.floor(Math.random() * 255)));
        });
      }
      console.log(this.colors);
      this.createCells()
  },
  methods: {
      createCellsTest() {

      },
      createCells() {
        var bbTerrarium = new window.terra.Terrarium(100, 100);

        var energy = Array.from({length: 3}, () => Math.floor(Math.random() * 3));


        // or three nested arrays of numbers ie
        // [[123, 123, 123], [456...]...]


        window.terra.registerCreature({
        type: 'plant',
        size: 10,
        color: this.colors[0],
        initialEnergy: energy[0],
        maxEnergy: 20,
        wait: function() {
            // photosynthesis :)
            this.energy += 1;
        },
        move: false,
        reproduceLv: 0.65
        });

        window.terra.registerCreature({
        type: 'brute',
        color: this.colors[1],
        maxEnergy: 50,
        initialEnergy: energy[1],
        size: 20
        });

        window.terra.registerCreature({
        type: 'bully',
        color: this.colors[2],
        initialEnergy: energy[2],
        reproduceLv: 0.6,
        sustainability: 1
        });

        bbTerrarium.grid = bbTerrarium.makeGridWithDistribution([['plant', 50], ['brute', 5], ['bully', 5]]);
        bbTerrarium.animate();
        }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
canvas {
        width: 100% !important;
    height: 100% !important;
    left: 0;
    top: 0;
    position: absolute;
    z-index: -1;
}
</style>
