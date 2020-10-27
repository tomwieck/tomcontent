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

    }
  },
  created() {
      this.createCells()
  },
  methods: {
      createCellsTest() {

      },
      createCells() {
        var bbTerrarium = new window.terra.Terrarium(100, 100);

        window.terra.registerCreature({
        type: 'plant',
        color: [0, 0, 120],
        size: 10,
        initialEnergy: 5,
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
        color: [0, 0, 255],
        maxEnergy: 50,
        initialEnergy: 10,
        size: 20
        });

        window.terra.registerCreature({
        type: 'bully',
        color: [0, 0, 15],
        initialEnergy: 20,
        reproduceLv: 0.6,
        sustainability: 3
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
