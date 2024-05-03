const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "finish the course and learn  vue",
      courseGoalB: "this is the course goal",
      vueLink: "https://chat.openai.com/",
    };
  },
  methods: {
    outputGoal() {
      const reendomNumber = Math.random();
      if (reendomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
