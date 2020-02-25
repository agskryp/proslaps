<template>
  <div id="ProSlaps">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1>Pro Slaps!</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <h3 class="text-center">User</h3>

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
          <h2>{{ this.results }}</h2>
        </div>

        <div class="col-5">
          <h3 class="text-center">Computer</h3>

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
          <h4 v-if="this.message !== ''">{{ this.message }}</h4>
          <h4 v-if="this.message === ''" class="ellipsis-anim">
            Computer is thinking<span>.</span><span>.</span><span>.</span>
          </h4>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-12 col-md mt-2 mb-2">
              <button
                type="button"
                class="btn btn-light btn-block"
                data-toggle="button"
                aria-pressed="false"
                @click="onAction('hand-paper')"
              >
                Paper
              </button>
            </div>

            <div class="col-12 col-md mt-2 mb-2">
              <button
                type="button"
                class="btn btn-secondary btn-block"
                data-toggle="button"
                aria-pressed="false"
                @click="onAction('hand-rock')"
              >
                Rock
              </button>
            </div>

            <div class="col-12 col-md mt-2 mb-2">
              <button
                type="button"
                class="btn btn-warning btn-block"
                data-toggle="button"
                aria-pressed="false"
                @click="onAction('hand-scissors')"
              >
                Scissors
              </button>
            </div>

            <div class="col-12 col-md mt-2 mb-2">
              <button
                type="button"
                class="btn btn-success btn-block"
                data-toggle="button"
                aria-pressed="false"
                @click="onAction('hand-lizard')"
              >
                Lizard
              </button>
            </div>

            <div class="col-12 col-md mt-2 mb-2">
              <button
                type="button"
                class="btn btn-info btn-block"
                data-toggle="button"
                aria-pressed="false"
                @click="onAction('hand-spock')"
              >
                Spock
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row mt-2 mb-2">
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

          <div class="row">
            <div class="col">
              <button class="btn-link btn-sm" @click="rulesButton()">
                Rules
              </button>
              |
              <button class="btn-link btn-sm" @click="infoButton()">
                Information
              </button>
            </div>

            <div class="col text-right">
              <small
                >Made by
                <a href="https://agskryp.com" target="_blank">A.G. Skryp</a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <InfoModal v-if="showInfoModal" @closeWindow="showInfoModal = false" />
      <RulesModal v-if="showRulesModal" @closeWindow="showRulesModal = false" />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import InfoModal from "./components/Info.vue";
import RulesModal from "./components/Rules.vue";
import onAction from "./scripts/onAction";
import onIdle from "./scripts/onIdle";

export default {
  name: "App",
  components: {
    InfoModal,
    RulesModal
  },

  mixins: [onAction, onIdle],

  data() {
    return {
      computerChoice: "hand-scissors",
      humanChoice: "hand-rock",
      results: "",
      counterWins: 0,
      counterDraws: 0,
      counterLoses: 0,
      actionResults: false,
      showRulesModal: false,
      showInfoModal: false,
      message: ""
    };
  },

  mounted() {
    this.idleScreen();
  },

  methods: {
    idleScreen() {
      this.idleTimer = setInterval(() => {
        this.idleAnimations();
      }, 1000);
    },

    rulesButton() {
      this.showRulesModal = true;
    },

    infoButton() {
      this.showInfoModal = true;
    }
  },

  created: function() {}
};
</script>
