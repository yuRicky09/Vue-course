const app = Vue.createApp({
  data() {
    return {
      name: "Hsu Yu",
      age: 26,
      imgLink:
        "https://ca-times.brightspotcdn.com/dims4/default/01bf309/2147483647/strip/true/crop/1636x920+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fff%2Ff93d92d616e87b235fc8bdd13813%2Fla-1551322358-aiwojuzsoy-snap-image",
    };
  },
  methods: {
    calcAge() {
      return this.age + 5;
    },
    randomNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
