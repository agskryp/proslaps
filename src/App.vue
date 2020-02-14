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
          <font-awesome-icon
            size="5x"
            :icon="this.humanChoice"
            class="human-icon"
          />

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
          <font-awesome-icon
            class="computer-icon"
            size="5x"
            :icon="this.computerChoice"
          />

          <div>Is thinking...</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>{{ this.results }}</h2>
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
      computerChoice: "hand-scissors",
      humanChoice: "hand-rock",
      results: '',
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
          this.computerChoice = "hand-paper";
        }

        if (this.computerIconGenerator == 2) {
          this.computerChoice = "hand-rock";
        }

        if (this.computerIconGenerator == 3) {
          this.computerChoice = "hand-scissors";
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

    onAction(hand) {
      this.idleScreen = false;

      this.computerIconGenerator = Math.floor(Math.random() * 3 + 1);

      if (this.computerIconGenerator == 1) {
        this.computerChoice = "hand-paper";
      }

      if (this.computerIconGenerator == 2) {
        this.computerChoice = "hand-rock";
      }

      if (this.computerIconGenerator == 3) {
        this.computerChoice = "hand-scissors";
      }
      
      this.humanChoice = hand;

      console.log(hand);
      console.log(this.computerChoice);

      if (
        (hand == "hand-rock" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-paper" && this.computerChoice == "hand-rock") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-paper")
      ) {
        console.log("User wins!");
        this.results = "User wins!";
      } else if (
        (hand == "hand-rock" && this.computerChoice == "hand-rock") ||
        (hand == "hand-paper" && this.computerChoice == "hand-paper") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-scissors")
      ) {
        console.log("It's a draw!");
        this.results = "It's a draw!";
      } else if (
        (hand == "hand-rock" && this.computerChoice == "hand-paper") ||
        (hand == "hand-paper" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-rock")
      ) {
        console.log("Computer wins");
        this.results = "Computer Wins";
      }

      //      setTimeout( () => {
      //        console.log( 'Action has ended' );
      //      }, 4000);
      //
      //

      this.idleScreen = true;
    }
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
