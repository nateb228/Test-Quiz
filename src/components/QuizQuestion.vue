<template>
<div id="quiz">

<!-- do not display if the question index exceeds the length of all quizez -->
<div v-if="questionindex < quizez.length+1">
<!-- display only if the question index is greater than zero -->
<!-- onclick of this button, call the previous function, and show last question -->
<button v-if="questionindex > 0" v-on:click="prev">
< prev
</button>
<!-- onclick of this button, call the next function, and show next question -->
<button v-on:click="next">
next >
</button>
</div>
<div style="margin-top: 50px;"></div>
<!-- Questions: display a div for each question -->
<!-- show only if the index of the quetion is equal to the question index -->
<div v-for="(quiz, index) in quizez" v-show="index === questionindex">
<!-- display the quiz Category -->
<!-- <h1>{{ quiz.category }}</h1>-->
<!-- display question image -->
<img :src="quiz.image"/>
<!-- display the quiz question -->
<h3>{{ quiz.question }}</h3>
<!-- Responses: display a li for each possible response with a radio button -->

<div style="margin-top: 30px;"></div>
<!--display the quiz options -->
<span v-for="answer in quiz.incorrect_answers">

<label>
<!-- bind the options to the array index of the answers array that matches this index -->
<input type="radio" name="answer" v-model="answers[index]" :value="answer"> {{answer}}
</label>
</span>


</div>

<div style="margin-top: 50px;"></div>
<!-- do not display if the question index exceeds the length of all quizez -->
<div v-if="questionindex < quizez.length">
<!-- display only if the question index is greater than zero -->
<!-- onclick of this button, call the previous function, and show last question -->
<button v-if="questionindex > 0" v-on:click="prev">
< prev
</button>
<!-- onclick of this button, call the next function, and show next question -->
<button v-on:click="next">
next >
</button>
</div>
<!-- show total score, if the questions are completed -->
 <!--<span v-if="questionindex == quizez.length">Your Total score is {{score}} / {{quizez.length}}</span> -->

</div>
</template>

import Image from './src/assets/logo.png';

<script>
 /* eslint-disable */
    // an array of questions to be asked. Length of 20 questions.\
    var quiz_questions = require('../questions.json');

    //var correct_answers = require('../answers.json');
    export default {

        //name of the component
        name: 'QuizQuestion',
        //function that returns data to the components
        data: function() {
            return {
                //question index, used to show the current question
                questionindex: 0,
                //set the variable quizez to the questions defined earlier
                quizez: quiz_questions,
                //create an array of the length of the questions, and assign them to an empty value.
                answers: Array(quiz_questions.length).fill(''),
            }
        },
        //methods to be called in the component
        methods: {
            // Go to next question
            next: function() {

                this.questionindex++;
            },
            // Go to previous question
            prev: function() {
                this.questionindex--;
            }
        },
        computed: {
            //calculate total score of the quiz person.
            score: function() {
                var total = 0;
                for (var i = 0; i < this.answers.length; i++) {
                    if (this.answers[i] == this.quizez[i].correct_answer) {
                        total += 1;
                    }
                }
                return total;
            }
        },
        watch: {
          questionindex: function(){
            if(this.questionindex > this.quizez.length){
              alert('Thank you for taking the challenge');
            }
          }
        }
    }
</script>

<style>
    #quiz {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        padding: 60px
    }
</style>
