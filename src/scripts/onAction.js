import victory from "@/scripts/results/victory.js";
import draw from "@/scripts/results/draw.js";
import defeat from "@/scripts/results/defeat.js";

export default {
  mixins: [victory, draw, defeat],

  methods: {
    invocation() {
      this.createPause = setTimeout(() => {
        this.idleScreen();
        this.actionResults = false;
        this.results = "Play again?";
        this.message = "Computer is thinking...";
      }, 3000);
    },

    onAction(hand) {
      clearInterval(this.idleTimer);
      this.actionResults = true;

      this.computerIcon();

      this.humanChoice = hand;

      this.victory(hand);
      this.draw(hand);
      this.defeat(hand);

      clearTimeout(this.createPause);
      this.invocation();
    }
  }
};
