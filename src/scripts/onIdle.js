export default {
  data() {
    return {
      computerIconRNG: 1,
      humanIconRNG: 1,
    }
  },

  methods: {
    computerIcon: function() {
      this.computerIconRNG = Math.floor(Math.random() * 5 + 1);

      if (this.computerIconRNG == 1) {
        this.computerChoice = "hand-paper";
      }

      if (this.computerIconRNG == 2) {
        this.computerChoice = "hand-rock";
      }

      if (this.computerIconRNG == 3) {
        this.computerChoice = "hand-scissors";
      }

      if (this.computerIconRNG == 4) {
        this.computerChoice = "hand-lizard";
      }

      if (this.computerIconRNG == 5) {
        this.computerChoice = "hand-spock";
      }
    },

    onIdleScreen: function() {
      this.computerIcon();

      this.humanIconRNG = Math.floor(Math.random() * 5 + 1);

      if (this.humanIconRNG == 1) {
        this.humanChoice = "hand-paper";
      }

      if (this.humanIconRNG == 2) {
        this.humanChoice = "hand-rock";
      }

      if (this.humanIconRNG == 3) {
        this.humanChoice = "hand-scissors";
      }

      if (this.humanIconRNG == 4) {
        this.humanChoice = "hand-lizard";
      }

      if (this.humanIconRNG == 5) {
        this.humanChoice = "hand-spock";
      }
    }
  }
};
