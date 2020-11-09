<template>
    <div>
    </div>
</template>

<script>
import random from 'random'

export default {
  name: 'CellAutomata',
  data: function() {
    return {
      octaves: 10,
      colors: [],
    }
  },
  created() {
      for (let i = 0; i < 3; i++) {
        this.colors.push(Array.from({length: 3}, () => random.int(0,255)));
      }
      this.createCells()

      console.log(this.colors[0], this.colors[1]);
  },
  methods: {
      createCells() {
        var bbTerrarium = new window.terra.Terrarium(100,100);

        let energy = Array.from({length: 3}, () => random.int(1, 30))

        console.log(this.colors[0], this.colors[1]);
        window.terra.registerCreature({
          type: 'plant',
          color: [0, random.int(0,100), random.int(0,255)],
          size: 10,
          initialEnergy: energy[0],
          wait: function() {
              // photosynthesis :)
              this.energy += 1;
          },
          move: false,
          reproduceLv: 0.65
        });

        window.terra.registerCreature({
          type: 'brute',
          color: [random.int(0,500), random.int(0,100), random.int(0,255)],
          maxEnergy: 500,
          initialEnergy: 100,
          size: 20,
          wait: function() {
              // photosynthesis :)
              this.energy += 1;
          },
        });
        console.log(this.colors[0], this.colors[1]);

        window.terra.registerCreature({
          type: 'bully',
          color: [random.int(0,50), 0, random.int(0,255)],
          initialEnergy: energy[2],
          sustainability: 30
        });
        console.log(this.colors[2]);


        bbTerrarium.grid = bbTerrarium.makeGridWithDistribution([['plant', 50], ['brute', 5], ['bully', 10]]);
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
