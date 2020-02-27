export default {
  data() {
    return {
      counterWins: 0,
      counterDraws: 0,
      counterLoses: 0,
      counterPaper: 0,
      counterRock: 0,
      counterScissors: 0,
      counterLizard: 0,
      counterSpock: 0
    };
  },

  methods: {
    localStats: function() {
      if (localStorage.counterWins) {
        this.counterWins = localStorage.counterWins;
      }

      if (localStorage.counterDraws) {
        this.counterDraws = localStorage.counterDraws;
      }

      if (localStorage.counterLoses) {
        this.counterLoses = localStorage.counterLoses;
      }

      if (localStorage.counterPaper) {
        this.counterPaper = localStorage.counterPaper;
      }

      if (localStorage.counterRock) {
        this.counterRock = localStorage.counterRock;
      }

      if (localStorage.counterScissors) {
        this.counterScissors = localStorage.counterScissors;
      }

      if (localStorage.counterLizard) {
        this.counterLizard = localStorage.counterLizard;
      }

      if (localStorage.counterSpock) {
        this.counterSpock = localStorage.counterSpock;
      }
    }
  }
};
