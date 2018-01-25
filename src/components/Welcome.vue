<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Answer the following questions to see if you enjoy the problem solving aspect of coding.</h2>

    <h2 style="color: red;">. . . . . . . . . . . . . . . .</h2>

    <router-link to=".src/components/QuizQuestion"><button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Start >>
</button></router-link>


  </div>




</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Problem Solving Challenge.'
    }
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

button {
    display: inline-block;
    padding: 10px 30px;
		color: #fff;
		background-color: #a93a52;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
</style>
