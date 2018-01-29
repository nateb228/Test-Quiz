<template>
  <div id="app">
    <div id="panel">
      <!-- #failing at getting these dumb transitions to work  -->
      <!-- <transition name="slide"> -->
        <Hello @buttonClicked="handleClick" v-show="!questionTime"></Hello>
      <!-- </transition> -->
      <!-- <transition-group name="slide"> -->
        <Question @backClicked="goBack" @answerStored="nextQuestion" v-show="questionTime" v-if="currentQuestion === question" v-for="(question, index) in questions" v-bind:key="index" :question="question" :index="index"></Question>
      <!-- <transition-group> -->

        <Result v-show="showResult" :picture="this.picture" :address="this.address" :description="this.description"></Result>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Hello from './components/Hello'
import Question from './components/Question'
import Result from './components/Result'
/* eslint-disable */
export default {
  name: 'app',

  data () {
    return {
      questionTime: false, // activates after homepage
      questions: [],
      answers:[],
      currentQuestion: null,
      questionIndex: 0,
      showResult: false,
      responses: [],
      resultKeys: [],
      picture: null,
      address: null,
      description: null
    }
  },

  mounted () {
    console.log('App -> mounted.')
    // axios.get('http://code4ct.codespace.co.za/api/v1/quiz/33')
    axios.get('http://localhost:8080/static/quiz.json')
      .then((response) => {
        var res = response.data;
        this.questions = res.quiz.questions[0];
      })

  },


  components: {
    Hello,
    Question,
    Result
  },

  methods: {
    calculateResult(){
      console.log('App -> mounted.')
        //var answer = this; //----the script I have to add
    axios.post('http://code4ct.codespace.co.za/api/v1/quiz/33/answer', {
  answer: this.answer_id,
})
.then((response) => {
  var res = response.data;
  this.answers = res.quiz.answers[0];
  this.showResult = true

})

},


    handleClick () {  // triggers after "Take the quiz" button is clicked
      console.log('App -> button clicked.')
      this.questionTime = true
      this.currentQuestion = this.questions[this.questionIndex]
    },

    goBack () {   // go back to previous question
      this.questionIndex--
      console.log('App -> questionIndex: ' + this.questionIndex)
      this.responses.splice(this.questionIndex, 1)  // removes previously recorded answers
      this.resultKeys.splice(this.questionIndex, 1)
      this.currentQuestion = this.questions[this.questionIndex]
    },

    nextQuestion (a) {  // triggers when an answer choice is clicked
      console.log('App -> nextQuestionClicked')
      this.responses.push(a)
      this.resultKeys.push(a.id) // resultKeys stores the first letter of each answer choice
      this.questionIndex++
      if (this.questionIndex ===20 ) { // shows Result component after all question
        this.calculateResult()
      }
      this.currentQuestion = this.questions[this.questionIndex]
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 255, 255);
  background-image: url("/static/images/sombrero.jpg");
  display: flex;
  /*border: 5px solid red;*/
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

#panel{
  background: rgba(255, 255, 255, 0.6);
  height: 90vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /*border: 5px solid red;*/
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  position: absolute;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
  position: absolute;
}

</style>
