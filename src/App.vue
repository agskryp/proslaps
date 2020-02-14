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
          <font-awesome-icon size="5x" :icon="this.humanChoice" class="human-icon" />

          <div>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-paper')"
          >
            Paper
          </button>

          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-rock')"
          >
            Rock
          </button>

          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-scissors')"
          >
            Scissors
          </button>
  </div>
        </div>
        <div class="col">
          <font-awesome-icon class="computer-icon" size="5x" :icon="this.ComputerChoice" />

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
      idleScreen: true,
      computerIconGenerator: 1,
      humanIconGenerator: 1,
      ComputerChoice: "hand-scissors",
      humanChoice: "hand-rock"
    };
  },

  mounted() {
//    this.onIdleScreen();
  },

  methods: {
    onIdleScreen() {
      this.idleScreen = true;
      
      setInterval(() => {
        this.computerIconGenerator = Math.floor(Math.random() * 3 + 1);
        this.humanIconGenerator = Math.floor(Math.random() * 3 + 1);

        if (this.computerIconGenerator == 1) {
          this.ComputerChoice = "hand-paper";
        }

        if (this.computerIconGenerator == 2) {
          this.ComputerChoice = "hand-rock";
        }

        if (this.computerIconGenerator == 3) {
          this.ComputerChoice = "hand-scissors";
        }
        
        if (this.humanIconGenerator == 1) {
          this.humanChoice = "hand-paper";
        }

        if (this.humanIconGenerator == 2) {
          this.humanChoice = "hand-rock";
        }

        if (this.humanIconGenerator == 3) {
          this.humanChoice = "hand-scissors";
        }
      }, 1000);
    },
    
    onAction( hand ) {
      this.idleScreen = false;
      
      this.computerIconGenerator = Math.floor(Math.random() * 3 + 1);
      
      if (this.computerIconGenerator == 1) {
        this.ComputerChoice = "hand-paper";
      }

      if (this.computerIconGenerator == 2) {
        this.ComputerChoice = "hand-rock";
      }

      if (this.computerIconGenerator == 3) {
        this.ComputerChoice = "hand-scissors";
      }
      
      console.log( hand );
      console.log( this.ComputerChoice );
      
      if( hand == 'hand-rock' && this.ComputerChoice == 'hand-scissors' || 
          hand == 'hand-paper' && this.ComputerChoice == 'hand-rock' ||
          hand == 'hand-scissors' && this.ComputerChoice == 'hand-paper' ) {
        console.log( 'User wins!' );
      } else if( hand == 'hand-rock' && this.ComputerChoice == 'hand-rock' || 
          hand == 'hand-paper' && this.ComputerChoice == 'hand-paper' ||
          hand == 'hand-scissors' && this.ComputerChoice == 'hand-scissors' ) {
        console.log( 'It\'s a draw!' );
      }
      else if( hand == 'hand-rock' && this.ComputerChoice == 'hand-paper' || 
          hand == 'hand-paper' && this.ComputerChoice == 'hand-scissors' ||
          hand == 'hand-scissors' && this.ComputerChoice == 'hand-rock' ) {
        console.log( 'Computer wins' );
      }
      
      
      
      
      
//      setTimeout( () => {
//        console.log( 'Action has ended' );
//      }, 4000);
//      
//      
      
      
      
      this.idleScreen = true;
    },
  },

  created: function() {}
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
  
  
  
.human-icon {
  font-size: 20em;
  padding: 50px 0;
  
  &.fa-hand-scissors {
    transform: scaleX(-1);
  }

  &.fa-hand-rock,
  &.fa-hand-paper {
    transform: rotate(90deg);
  }
}

.computer-icon {
  font-size: 20em;
  padding: 50px 0;
  
  &.fa-hand-rock,
  &.fa-hand-paper {
    transform: scaleX(-1) rotate(90deg);
  }
}
</style>
