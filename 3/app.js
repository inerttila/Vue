const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },

  computed: {
    fullname() {
      console.log("running again ...");
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
