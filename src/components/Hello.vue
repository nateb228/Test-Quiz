<template>
  <div class="hello">
    <div class="hero">
      <h1 >Problem Solving Challenge</h1>
      <form class="ui centered">
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div class="form-group">
            <label>Name:</label><br/>
            <input type="text" placeholder="Name" v-model="name" v-validate="'required'" name="name" :class="{'form-control': true, 'error': errors.has('name') }" />
            <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
          </div>
          <div class="form-group">
            <label>Email:</label><br/>
            <input type="email" placeholder="Email" v-model="email" v-validate="'required|email'" name="email" :class="{'form-control': true, 'error': errors.has('email') }" />
            <span class="small text-danger" v-show="errors.has('email')">Email is required</span>
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

      </form>
    </div>
    <button @click="loadQuestion"><span>Submit & Start</span></button>
  </div>
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
          mobile:''
      }
  },


  mounted () {
    const hero = document.querySelector('.hero')
    const text = hero.querySelector('h1')
    const walk = 30 // 100px

    function shadow (e) {
      const width = hero.offsetWidth
      // const height = hero.offsetHeight
      let { offsetX: x, offsetY: y } = e

      if (this !== e.target) {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
      }

      const xwalk = (x / width * walk) - (walk / 2)
      const ywalk = (y / width * walk) - (walk / 2)

      text.style.textShadow = `
        ${xwalk}px ${ywalk}px 0 rgba(255, 255, 255, 0.8)
      `
    }

    hero.addEventListener('mousemove', shadow)
  },

  methods: {

    loadQuestion (){
    axios.post('http://code4ct.codespace.co.za/api/v1/quiz/33/answer', {
    name: this.name,
    email: this.email
  }
  .then(response => {
      this.name = response.data.name;
      this.lname = response.data.lname;
      this.email = response.data.email;
      this.mobile = response.data.mobile;
  }),
  this.$validator.validateAll().then((result) => {
      if (result) {
          //validation passed succesfully
          //alert('Form validated succesfully');
          // push to the new route
          this.$emit('buttonClicked')

      } else {
          alert('One or two fields were not validated succesfully');
      }
  })
  .catch((error)=>{
          alert('One or two fields were not validated succesfully');

}),


    loadQuestion () {
      this.$emit('buttonClicked')
    }
    //startCountdown () {
    //  this.$emit('buttonClicked')
    //}
  }
}

</script>

<style scoped>

  .hello{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1{
    /*border: 5px solid red;*/
    background: url("/vue-project/static/images/cluster.jpg") no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 55px;
    text-align: center;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 5px 5px 0 rgba(255, 255, 255, 0.8);
  }

  button{
    display: flex;
    background-color: rgba(15, 82, 186, .6);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    align-content: center;
    font-size: 4vmin;
    cursor: pointer;
    margin-top: -50px;
  }

  /*button span{
    color: rgba(255, 255, 255, 0.6);
  }*/

  @media only screen and (max-width: 1250px) {

    h1{
      font-size: 14vmin;
    }
  }

</style>
