<template>
  <div id="ProSlaps">
    <div class="container">
      <header class="row">
        <div class="col text-center">
          <h1>
            <span class="font-weight-bold">Pro</span>
            <span class="font-italic">Slaps!</span>
          </h1>
        </div>
      </header>

      <main>
        <div class="row">
          <div class="col-6 col-md-5 order-0">
            <span class="h6 text-center d-block font-weight-bold">User</span>

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

          <div
            class="col-12 col-md-2 d-flex align-items-center justify-content-center text-center order-3 order-md-1 mt-2 mt-md-0"
          >
            <p class="result-text h5 font-weight-bold">{{ this.results }}</p>
          </div>

          <div class="col-6 col-md-5 order-1 order-md-2">
            <span class="h6 text-center d-block font-weight-bold"
              >Computer</span
            >

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
          <div class="col text-center mt-2">
            <p class="h4" v-if="this.message !== ''">{{ this.message }}</p>

            <p v-if="this.message === ''" class="thinking-message h4">
              Computer is thinking<span>.</span><span>.</span><span>.</span>
            </p>
          </div>
        </div>

        <controller
          @paper="onAction('hand-paper')"
          @rock="onAction('hand-rock')"
          @scissors="onAction('hand-scissors')"
          @lizard="onAction('hand-lizard')"
          @spock="onAction('hand-spock')"
        />

        <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="row mt-1 mb-1 mt-md-2 mb-md-2">
              <div class="col">
                <b>Wins: {{ this.counterWins }}</b>
              </div>

              <div class="col text-center">
                <b>Draws: {{ this.counterDraws }}</b>
              </div>

              <div class="col text-right">
                <b>Loses: {{ this.counterLoses }}</b>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer class="row">
        <div class="col-md-10 mx-auto footer-container">
          <div class="row">
            <div class="col">
              <button
                class="btn-link btn-sm text-decoration-none"
                @click="rulesButton()"
              >
                Rules
              </button>
              |
              <button
                class="btn-link btn-sm text-decoration-none"
                @click="infoButton()"
              >
                Information
              </button>
              |
              <button
                class="btn-link btn-sm text-decoration-none"
                @click="statsButton()"
              >
                Stats
              </button>
            </div>

            <div class="col text-right">
              <span class="d-block attribution"
                >Made by
                <a
                  href="https://agskryp.com"
                  class="text-decoration-none"
                  target="_blank"
                >
                  A.G. Skryp
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <modalInfo v-if="showModalInfo" @closeWindow="showModalInfo = false" />
      <modalRules v-if="showModalRules" @closeWindow="showModalRules = false" />
      <modalStats v-if="showModalStats" @closeWindow="showModalStats = false" />
    </div>
  </div>
</template>

<style lang="scss">
.result-text {
  line-height: 1.2;
  margin: 0;
}

.footer-container {
  padding: 0 0.5rem;

  .btn-link {
    border: none;
    outline: none;
    background: transparent;

    &:focus {
      color: #0056b3;
    }
  }

  .attribution {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
  }
}
</style>

<script>
import modalInfo from "./components/Info.vue";
import modalRules from "./components/Rules.vue";
import modalStats from "./components/modals/Stats.vue";

import controller from "./components/Controller.vue";

import onAction from "./scripts/onAction";
import onIdle from "./scripts/onIdle";

export default {
  name: "ProSlaps",
  components: {
    modalInfo,
    modalRules,
    modalStats,
    controller
  },

  mixins: [onAction, onIdle],

  data() {
    return {
      computerChoice: "hand-scissors",
      humanChoice: "hand-rock",
      results: "\xa0",
      counterWins: 0,
      counterDraws: 0,
      counterLoses: 0,
      handPaper: 0,
      handRock: 0,
      handScissors: 0,
      handLizard: 0,
      handSpock: 0,
      actionResults: false,
      showModalRules: false,
      showModalInfo: false,
      showModalStats: false,
      message: ""
    };
  },

  mounted() {
    this.idleScreen();

    if( localStorage.counterWins ) {
      this.counterWins = localStorage.counterWins;
    }

    if( localStorage.counterDraws ) {
      this.counterDraws = localStorage.counterDraws;
    }

    if( localStorage.counterLoses ) {
      this.counterLoses = localStorage.counterLoses;
    }

    if( localStorage.handPaper ) {
      this.handPaper = localStorage.handPaper;
    }

    if( localStorage.handRock ) {
      this.handRock = localStorage.handRock;
    }

    if( localStorage.handScissors ) {
      this.handScissors = localStorage.handScissors;
    }
    
    if( localStorage.handLizard ) {
      this.handLizard = localStorage.handLizard;
    }

    if( localStorage.handSpock ) {
      this.handSpock = localStorage.handSpock;
    }
  },

  watch: {},

  methods: {
    idleScreen() {
      this.idleTimer = setInterval(() => {
        this.idleAnimations();
      }, 1000);
    },

    rulesButton() {
      this.showModalRules = true;
    },

    statsButton() {
      this.showModalStats = true;
    },

    infoButton() {
      this.showModalInfo = true;
    }
  }
};
</script>
