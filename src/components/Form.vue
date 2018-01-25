<template>

<div id="form" @submit.prevent>
<form class="ui centered">
  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
    <div class="form-group">
      <label>Name:</label><br/>
      <input type="text" placeholder="Name" v-model="name" v-validate="'required'" name="name" :class="{'form-control': true, 'error': errors.has('name') }" />
      <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
    </div>
    <div class="form-group">
      <label>Email:</label><br/>
      <input type="text" placeholder="Email" v-model="email" v-validate="'required'" name="email" :class="{'form-control': true, 'error': errors.has('email') }" />
      <span class="small text-danger" v-show="errors.has('email')">Email is required</span>
    </div>
    <div class="form-group">
      <label>Location (City & Suburb)</label><br/>
      <input type="text" placeholder="Location (City & Suburb)" v-model="city" v-validate="'required'" name="city" :class="{'form-control': true, 'error': errors.has('city') }" />
      <span class="small text-danger" v-show="errors.has('city')">Location (City & Suburb) is required</span>
    </div>
    <div class="form-group">
      <label>Age</label><br/>
      <input type="number" class="form-control" placeholder="Age" v-model="age" v-validate="'required'" name="age" :class="{'form-control': true, 'error': errors.has('age') }" />
      <span class="small text-danger" v-show="errors.has('age')">age is required</span>
    </div>
  </div>

  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
    <div class="form-group">
      <label>Last Name:</label><br/>
      <input type="text" placeholder="Last Name" v-model="lname" v-validate="'required'" name="lname" :class="{'form-control': true, 'error': errors.has('lname') }" />
      <span class="small text-danger" v-show="errors.has('lname')">Last Name is required</span>
    </div>
    <div class="form-group">
      <label>Mobile:</label><br/>
      <input type="number" class="height form-control" placeholder="mobile" v-model="mobile" v-validate="'required'" name="mobile" :class="{'form-control': true, 'error': errors.has('mobile') }" />
      <span class="small text-danger" v-show="errors.has('mobile')">Mobile is required</span>
    </div>
    <div class="form-group">

      <label>Gender:</label><br/>
      <select type="text" class="height form-control" v-model="gender" v-validate="'required'" name="gender" :class="{'form-control': true, 'error': errors.has('gender') }">
          <option value=""> Choose...</option>
          <option value="Female"> Female</option>
          <option value="Male"> Male</option>
      </select>
      <span class="small text-danger" v-show="errors.has('gender')">Gender is required</span>
    </div>
    <div class="form-group">

      <label>How did you hear about us?</label>
      <select type="text" class="height form-control" v-model="heard" v-validate="'required'" name="heard" :class="{'form-control': true, 'error': errors.has('heard') }">
          <option value=""> Choose...</option>
          <option value="FB"> Facebook</option>
          <option value="Insta"> Instagram</option>
          <option value="Google"> Google</option>
          <option value="Friend"> Friend</option>
          <option value="News"> News</option>
          <option value="Poster"> Poster</option>
          <option value="Other"> Other</option>
      </select>
      <span class="small text-danger" v-show="errors.has('heard')">Field is required</span>
    </div>
    <div class="form-group">

      <label>Do you require financial assistance?</label><br/>
      <select type="text" class="height form-control" id="financial_assistance" v-model="financial_assistance" v-validate="'required'" name="financial_assistance" :class="{'form-control': true, 'error': errors.has('financial_assistance') }">
          <option value="No"> No</option>
          <option value="Yes"> Yes</option>
      </select>
      <span class="small text-danger" v-show="errors.has('financial_assistance')">Answer is required</span>
    </div>
  </div>

    <div class="form-group new-button">
      <button class="button" @click="moveToQuiz">
        <i class="fa fa-paper-plane"></i>
        <span>Submit</span>
        <span>And Start</span>
      </button>
    </div>
</form>
</div>
</template>

<script>
    /* eslint-disable */

    export default {
        data: function() {
            return {
                name: '',
                lname: '',
                email: '',
                city: '',
                age: '',
                mobile: '',
                gender: '',
                heard: '',
                financial_assistance:''
            }
        },
    methods: {
        moveToQuiz() {
          //axios.post('http://localhost:8080/',
    //this.name, // the data to post
    //{ data:"form"
    //  }).then(response => ....);
            this.$validator.validateAll().then((result) => {
                if (result) {
                    //validation passed succesfully
                    //alert('Form validated succesfully');
                    // push to the new route
                    this.$router.push({ name: 'QuizQuestion'})

                } else {
                    alert('One or two fields were not validated succesfully');
                }
            })
            .catch((error)=>{
                    alert('One or two fields were not validated succesfully');
            });

        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
margin-left: 150px;

}

</style>
