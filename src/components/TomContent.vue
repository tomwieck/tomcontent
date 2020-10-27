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

    <div class="logo-container" :key="logo" v-for="logo in logos">
      <button>
        <img
          :src="require(`@/assets/tc-${logo}.png`)"
          :alt="'Tom Content Logo ' + logo"
          @click="randomSynth()">
      </button>
    </div>
  </div>
</template>

<script>
import * as Tone from "tone";
import A1 from "../assets/BOOST.wav";

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      // eslint-disable-next-line  no-unused-labels
      octaves: 10,
      attack: 0,
      release: 0,
      isLoaded: false,
      notesArray: [],
      selected: 'AMSynth',
      instruments: [
        'AMSynth',
        'DuoSynth',
        'FMSynth',
        'MembraneSynth',
        'MetalSynth',
        'MonoSynth',
        'NoiseSynth',
        'PluckSynth',
        'PolySynth',
      ],
      logos: 14,
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
      let tempSynth = new Tone[this.selected];
      return tempSynth.toDestination();

    }
  },
  created() {
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
    getImgUrl(number) {
      return require('../assets/tc-' + number)
    },
    randomSynth() {
      // random from flattenedNoteArray
      //  pass to toneSynth

      let number = Math.floor((Math.random() * this.flatNotesArray.length) + 1);

      this.toneSynth(this.flatNotesArray[number])
    },
    toneSynth(note) {
      //  multiple synths
      console.log(note);
      console.log(this.synth);
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
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer;
}
button {
  background: none;
  border: 3px solid white;
  width: 100px;
  height: 100px;
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


/* class applies to select element itself, not a wrapper element */
.select-css {
  display: block;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 100%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient.
    for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference

  */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right .7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: .65em auto, 100%;
}
/* Hide arrow icon in IE browsers */
.select-css::-ms-expand {
  display: none;
}
/* Hover style */
.select-css:hover {
  border-color: #888;
}
/* Focus style */
.select-css:focus {
  border-color: #aaa;
  /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

/* Set options to normal weight */
.select-css option {
  font-weight:normal;
}

/* Support for rtl text, explicit support for Arabic and Hebrew */
*[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css {
  background-position: left .7em top 50%, 0 0;
  padding: .6em .8em .5em 1.4em;
}

/* Disabled styles */
.select-css:disabled, .select-css[aria-disabled=true] {
  color: graytext;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
}

.select-css:disabled:hover, .select-css[aria-disabled=true] {
  border-color: #aaa;
}

</style>
