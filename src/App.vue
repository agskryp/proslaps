<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Paper, Rock, Scissors</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>Human Icon</div>
          <font-awesome-icon icon="hand-paper" />
          <font-awesome-icon icon="hand-rock" />
          <font-awesome-icon icon="hand-scissors" />

          <br />

          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
          >
            Paper
          </button>

          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
          >
            Rock
          </button>

          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
          >
            Scissors
          </button>
        </div>
        <div class="col">
          <div>Computer Icon</div>
          <font-awesome-icon :icon="this.ComputerChoice" />

          <br />

          <div>Is thinking...</div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          Wins: #
        </div>

        <div class="col">
          Draws: #
        </div>

        <div class="col">
          Loses: #
        </div>
      </div>

      <div class="row">
        <div class="col">
          Made by A.G. Skryp
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  //  components: {
  //    HelloWorld
  //  }
  
  data() {
    return {
      NumberGenerator: 1,
      ComputerChoice: 'hand-scissors',
    };
  },
  
  props: {
  icon: String,
  },
  
  methods: {
//    say: function (msg) {
//      alert(msg)
//    }
  },
  
  created: function() {
    setInterval( function() {
      
      this.NumberGenerator = Math.floor( ( Math.random() * 3) + 1 );
//      var ComputerChoice = 'hand-scissors';
      
      if(this.NumberGenerator == 1) {
         this.ComputerChoice = 'hand-paper';
      } 
      
      if(this.NumberGenerator == 2) {
         this.ComputerChoice = 'hand-rock';
      } 
      
      if(this.NumberGenerator == 3) {
         this.ComputerChoice = 'hand-scissors';
      } 
      
      console.log( this.ComputerChoice );
      
    }, 1000);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
