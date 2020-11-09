<template>
  <div id="app">
    <select class="select-css" v-model="selected">
      <option
        v-for=" i in instruments"
        :key="i"
        :value="i">
          {{ i }}
      </option>
    </select>

    <cell-automata/>

    <div class="logo-container" :key="index" v-for="(logo, index) in logos">
      <button
        @click="playNote(index)">
        <img
          class="image"
          :src="require(`@/assets/tc-${logo}.png`)"
          :alt="'Tom Content Logo ' + logo">
      </button>
    </div>

  </div>
</template>

<script>

import * as Tone from "tone";
import A1 from "../assets/BOOST.wav";
import CellAutomata from './CellAutomata.vue';

export default {
  name: 'HelloWorld',
  components: {
    CellAutomata,
  },
  data: function() {
    return {
      // eslint-disable-next-line  no-unused-labels
      octaves: 10,
      attack: 0,
      release: 0,
      isLoaded: false,
      notesArray: [],
      selected: 'AMSynth',
      instrumentIndex: 0,
      instruments: [
        'AMSynth',
        'DuoSynth',
        'FMSynth',
        'MonoSynth',
      ],
      keys: 'awsedftgyhujkol',
      logos: 16,
      currentTranspose: 12,
    }
  },
  props: {
    title: String,
  },
  computed: {
    flatNotesArray: function () {
      // this.octaves
      const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      let newNotesArray = [];

      // created n amount of Ax Bx Cx Dx Ex Fx Gx
      for (let i = 0; i < this.octaves; i++) {
        newNotesArray.push(notes.map((note) => {
          return note + (i + '');
        }))
      }
      return newNotesArray.flat();
    },
    synth: function() {
      // Tone.x.
      console.log(this.selected)
      let tempSynth = new Tone[this.selected];
      return tempSynth.toDestination();

    }
  },
  created() {
  document.addEventListener('keyup', this.listener);

    this.sampler = new Tone.Sampler(
      { A1 },
      {
        onload: () => {
          this.isLoaded = true;
        }
      }
    ).toMaster();
  },
  methods: {
    listener(e) {

      console.log(e.key);

      if (e.key === 'ArrowUp' ) {
        if (this.instrumentIndex !== this.instruments.length - 1) {
          this.instrumentIndex++;
        }
        this.selected = this.instruments[this.instrumentIndex];
      }

      if (e.key === 'ArrowDown' ) {
        if (this.instrumentIndex !== 0) {
          this.instrumentIndex--;
        }
        this.selected = this.instruments[this.instrumentIndex];
      }

      if (e.key === 'z' && this.currentTranspose > 0) {
        this.currentTranspose = this.currentTranspose - 12;
      }

      if (e.key === 'x') {
        this.currentTranspose = this.currentTranspose + 12;
      }
      //z x
      // play note number that matches index in array +1
      // awsedftgyhujkol
      var n = this.keys.search(e.key);
      if (n === -1) {
        n = 1;
      }
      this.toneSynth(n + this.currentTranspose)
    },
    getImgUrl(number) {
      return require('../assets/tc-' + number)
    },
    playNote(i) {
      console.log(i);
      // random from flattenedNoteArray
      //  pass to toneSynth

      // let number = Math.floor((Math.random() * this.flatNotesArray.length) + 1);

      this.toneSynth(i + this.currentTranspose)
    },
    toneSynth(note) {
      //  multiple synths
      const now = Tone.now()
      // trigger the attack immediately
      this.synth.triggerAttack(note, this.attack)
      // wait one second before triggering the release
      this.synth.triggerRelease(now + this.release)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
select {
  width: 100%;
  display: block;
  font-size: 24px;
  margin: 20px 0;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer;
}
button {
  background: none;
  border: 3px solid white;
  width: 60px;
  height: 60px;
  margin: 5px;
}

button:hover {
  border-color: red;
}

h3 {
  margin: 40px 0 0;
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
  color: white;
}
.logo-container {
  display: inline;
}

.image {
  width: 30px;
}


</style>
