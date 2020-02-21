<template>
  <div
    id="app"
    style="width: 100vw; height: 100vh; display: flex; align-items: center;  justify-content: center;"
  >
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1>Pro Slaps!</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <h2 class="text-center">User</h2>

          <div
            class="human-icon-container text-center"
            :class="{ 'stop-animation': actionResults }"
          >
            <font-awesome-icon
              size="5x"
              :icon="this.humanChoice"
              class="human-icon"
            />
          </div>
        </div>

        <div class="col-2 d-flex align-items-center text-center">
          <h3>{{ this.results }}</h3>
        </div>

        <div class="col-5">
          <h2 class="text-center">Computer</h2>

          <div
            class="computer-icon-container text-center"
            :class="{ 'stop-animation': actionResults }"
          >
            <font-awesome-icon
              class="computer-icon"
              size="5x"
              :icon="this.computerChoice"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <h4>{{ this.message }}</h4>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <button
            type="button"
            class="btn btn-light btn-lg btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-paper')"
          >
            Paper
          </button>
        </div>

        <div class="col">
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-rock')"
          >
            Rock
          </button>
        </div>

        <div class="col">
          <button
            type="button"
            class="btn btn-warning btn-lg btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-scissors')"
          >
            Scissors
          </button>
        </div>

        <div class="col">
          <button
            type="button"
            class="btn btn-success btn-lg btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-lizard')"
          >
            Lizard
          </button>
        </div>

        <div class="col">
          <button
            type="button"
            class="btn btn-info btn-lg btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="onAction('hand-spock')"
          >
            Spock
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col">Wins: {{ this.counterWins }}</div>

        <div class="col text-center">Draws: {{ this.counterDraws }}</div>

        <div class="col text-right">Loses: {{ this.counterLoses }}</div>
      </div>

      <div class="row">
        <div class="col">
          <button class="btn-link btn-sm" @click="rulesButton()">Rules</button>
          |
          <button class="btn-link btn-sm" @click="infoButton()">
            Information
          </button>
        </div>

        <div class="col text-right">
          <small
            >Made by
            <a href="https://agskryp.com" target="_blank">A.G. Skryp</a></small
          >
        </div>
      </div>

      <InfoModal
        v-if="showInfoModal"
        @closeWindow="showInfoModal = false"
      ></InfoModal>
      <RulesModal
        v-if="showRulesModal"
        @closeWindow="showRulesModal = false"
      ></RulesModal>
    </div>
  </div>
</template>

<script>
import InfoModal from "./components/Info.vue";
import RulesModal from "./components/Rules.vue";

export default {
  name: "App",
  components: {
    InfoModal,
    RulesModal
  },

  data() {
    return {
      idleScreen: true,
      computerIconGenerator: 1,
      humanIconGenerator: 1,
      computerChoice: "hand-scissors",
      humanChoice: "hand-rock",
      results: "",
      counterWins: 0,
      counterDraws: 0,
      counterLoses: 0,
      actionResults: false,
      showRulesModal: false,
      showInfoModal: false,
      message: "Computer is thinking..."
    };
  },

  mounted() {
    this.t = setInterval(() => {
      this.onIdleScreen();
    }, 1000);
  },

  methods: {
    onIdleScreen: function() {
      this.computerIconGenerator = Math.floor(Math.random() * 5 + 1);
      this.humanIconGenerator = Math.floor(Math.random() * 5 + 1);

      if (this.computerIconGenerator == 1) {
        this.computerChoice = "hand-paper";
      }

      if (this.computerIconGenerator == 2) {
        this.computerChoice = "hand-rock";
      }

      if (this.computerIconGenerator == 3) {
        this.computerChoice = "hand-scissors";
      }

      if (this.computerIconGenerator == 4) {
        this.computerChoice = "hand-lizard";
      }

      if (this.computerIconGenerator == 5) {
        this.computerChoice = "hand-spock";
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

      if (this.humanIconGenerator == 4) {
        this.humanChoice = "hand-lizard";
      }

      if (this.humanIconGenerator == 5) {
        this.humanChoice = "hand-spock";
      }
    },

    rulesButton() {
      this.showRulesModal = true;
    },

    infoButton() {
      this.showInfoModal = true;
    },

    onAction(hand) {
      clearInterval(this.t);
      this.actionResults = true;
      this.computerIconGenerator = Math.floor(Math.random() * 5 + 1);

      if (this.computerIconGenerator == 1) {
        this.computerChoice = "hand-paper";
      }

      if (this.computerIconGenerator == 2) {
        this.computerChoice = "hand-rock";
      }

      if (this.computerIconGenerator == 3) {
        this.computerChoice = "hand-scissors";
      }

      if (this.computerIconGenerator == 4) {
        this.computerChoice = "hand-lizard";
      }

      if (this.computerIconGenerator == 5) {
        this.computerChoice = "hand-spock";
      }

      this.humanChoice = hand;

      if (
        (hand == "hand-rock" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-rock" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-paper" && this.computerChoice == "hand-rock") ||
        (hand == "hand-paper" && this.computerChoice == "hand-spock") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-paper") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-spock") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-paper") ||
        (hand == "hand-spock" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-spock" && this.computerChoice == "hand-rock")
      ) {
        this.counterWins++;
        this.results = "User wins!";
      } else if (
        (hand == "hand-rock" && this.computerChoice == "hand-rock") ||
        (hand == "hand-paper" && this.computerChoice == "hand-paper") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-spock" && this.computerChoice == "hand-spock")
      ) {
        this.counterDraws++;
        this.results = "It's a draw!";

        if (hand == "hand-scissors" && this.computerChoice == "hand-scissors") {
          this.message = "En Garde!";
        }

        if (hand == "hand-spock" && this.computerChoice == "hand-spock") {
          this.message = "Great Spocks think alike";
        }
      } else if (
        (hand == "hand-rock" && this.computerChoice == "hand-spock") ||
        (hand == "hand-rock" && this.computerChoice == "hand-paper") ||
        (hand == "hand-paper" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-paper" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-spock") ||
        (hand == "hand-scissors" && this.computerChoice == "hand-rock") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-scissors") ||
        (hand == "hand-lizard" && this.computerChoice == "hand-rock") ||
        (hand == "hand-spock" && this.computerChoice == "hand-lizard") ||
        (hand == "hand-spock" && this.computerChoice == "hand-paper")
      ) {
        this.counterLoses++;
        this.results = "Computer Wins";

        if (hand == "hand-paper" && this.computerChoice == "hand-scissors") {
          this.message = "Snip Snip!";
        }
      }

      setTimeout(() => {
        this.t = setInterval(() => {
          this.onIdleScreen();
        }, 1000);

        this.actionResults = false;
        this.results = "Play again?";
        this.message = "Computer is thinking...";
      }, 3000);
    }
  },

  created: function() {}
};
</script>

<style lang="scss">
#app {
  /*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
}

.stop-animation {
  animation: none !important;
}

.human-icon-container {
  animation: humanHandShuffle 1s ease infinite;
  transform-origin: 10% 90%;
}

@keyframes humanHandShuffle {
  0% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(0deg);
  }

  92% {
    transform: rotate(-15deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.computer-icon-container {
  animation: computerHandShuffle 1s ease infinite;
  transform-origin: 90% 90%;
}

@keyframes computerHandShuffle {
  0% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(0deg);
  }

  92% {
    transform: rotate(15deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.human-icon {
  font-size: 18vw;
  padding: 60px 0 0;

  &.fa-hand-scissors,
  &.fa-hand-lizard {
    transform: scaleX(-1);
  }

  &.fa-hand-rock,
  &.fa-hand-paper,
  &.fa-hand-spock {
    transform: rotate(90deg);
  }
}

.computer-icon {
  font-size: 18vw;
  padding: 60px 0 0;

  &.fa-hand-rock,
  &.fa-hand-paper,
  &.fa-hand-spock {
    transform: scaleX(-1) rotate(90deg);
  }
}
</style>
