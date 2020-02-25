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

      <controller
        @paper="onAction('hand-paper')"
        @rock="onAction('hand-rock')"
        @scissors="onAction('hand-scissors')"
        @lizard="onAction('hand-lizard')"
        @spock="onAction('hand-spock')"
      />

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

      <modalInfo v-if="showModalInfo" @closeWindow="showModalInfo = false" />
      <modalRules v-if="showModalRules" @closeWindow="showModalRules = false" />
    </div>
  </div>
</template>

<style lang="scss">
#ProSlaps {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import modalInfo from "./components/Info.vue";
import modalRules from "./components/Rules.vue";
import controller from "./components/Controller.vue";
import onAction from "./scripts/onAction";
import onIdle from "./scripts/onIdle";

export default {
  name: "App",
  components: {
    modalInfo,
    modalRules,
    controller
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
      showModalRules: false,
      showModalInfo: false,
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
      this.showModalRules = true;
    },

    infoButton() {
      this.showModalInfo = true;
    }
  }
};
</script>
