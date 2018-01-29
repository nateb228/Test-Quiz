<template>
  <div class="timer">
    <div class="minutes" v-text="minutes"></div>
    <div class="seconds" v-text="secondsShown"></div>
  </div>
</template>
<script>

new Vue({
  el: '#countdown-app',
  events: {
    "hook:ready": function() {
      this.interval = setInterval(this.intervalCallback, 1000)
    },
  },
  data: {
    minutes: 30,
    seconds: 0,
    interval: null,
    started: true,
  },
  methods: {
    toggleTimer: function() {
      if(this.started) {
        this.started = false
      } else {
        if(!this.minutes && !this.seconds)
          this.resetTimer()
        this.started = true
      }
    },
    resetTimer: function() {
      this.minutes = 30
      this.seconds = 0
    },
    intervalCallback: function() {
      if(!this.started) return false
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete()
          return null
        }
        this.seconds = 59
        this.minutes--
      } else {
        this.seconds--
      }
    },
    timerComplete: function() {
      this.started = false
      alert("Thank you for taking the challenge")
    },
  },
  })
  </script>

  <style>
  $black: #333333;
  $white: #fefefe;
  $red: red;
  // Change these up with something at
  // http://paletton.com/
  // or http://uigradients.com/
  $color-1: #AA3939;
  $color-2: #E7003E;
  $bg-color-1: #16222A;
  $bg-color-2: #3A6073;

  @mixin placeholder {
    ::-webkit-input-placeholder {@content}
    :-moz-placeholder           {@content}
    ::-moz-placeholder          {@content}
    :-ms-input-placeholder      {@content}
  }

  .timer {
    display: flex;
    margin: 0 auto;
    font-size: 45vh;
    justify-content: center;
    font-weight: 700;
    text-shadow:1px 3px 0 $bg-color-2,
                1px 8px 0 $bg-color-1,
                0 0 5px rgba($bg-color-1, .5);
  }
  .seconds {
    &:before {
      content: ":";
      font-weight:100;
      opacity:.5;
    }
  }

  html {
    height: 100%;
  }

  body {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .tomato {
    position: fixed;
    top: 10%;
    width: 500px;
    height: auto;
    z-index: 1;
  }

  main {
    text-align: right;
    padding: 1rem;
    margin: 0 auto;
    width: 840px;
    border-radius: 3px;
    position: relative;
    z-index: 2;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  h1 {font-weight: 100; letter-spacing:-.03em}
  .screen-reader-text, .helper-input { display: none }
  html, body {
    min-height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  main {
    h1, h2, h3, h4, h5, h6 {
      &:first-child { margin-top: 0 }
    }
    p {
      line-height: 1.4rem;
      + p, &:last-child { margin-bottom: 0 }
    }
  }
  body {
    color: $white;
    background: linear-gradient(25deg, $bg-color-1, $bg-color-2);
  }
  input {
    transition: border-color .15s ease-in-out;
    margin: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba($black, .15);
    padding: .15rem;
    color: rgba($black, .95);
    &:hover {
      color: rgba($black, 1);
      border-color: rgba($black, .75);
    }
    &:focus {
      outline: none;
      border-bottom: 3px solid $black;
      margin-bottom: -2px;
    }
  }
  .material-button, .material-delete {
    transition: all .15s ease-in-out;
    background: $color-2;
    border: none;
    font-size: .9rem;
    line-height: 2rem;
    border-radius: 3px;
    color: $white;
    box-shadow: 1px 1px 3px 0 rgba($black, .15);
    text-transform: uppercase;
    &:hover {
      background: lighten($color-2, 20);
      box-shadow: 1px 3px 3px 0 rgba($black, .15);
    }
    &:active {
      top:-.7rem;
      outline: 0;
      box-shadow: none;
    }
  }
  .material-delete {
    font-size: 1rem;
    line-height: 1rem;
    height: 2rem;
    width: 2rem;
    top: 0;
    right: -1.5rem;
    transform: rotate(45deg);
    background: none;
    color: rgba($black, .15);
    box-shadow: none;
    &:hover {
      background: rgba($black, .075);
      color: $white;
      box-shadow: none;
    }
    &:active {
      color: $red;
      background: transparent;
      top: 0;
    }
  }
  .material-modal-button {
    cursor: pointer;
    background: transparent;
    border: 0;
    color: darken($color-2, 10);
    &:hover {
      color: $color-2;
    }
  }

  </style>
