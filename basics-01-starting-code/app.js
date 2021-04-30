const app = Vue.createApp({
  // data: function () {}
  // 現代JS當屬性的值是一個fn時可簡寫如下
  data() {
    // 而這個data屬性的fn永遠只會會傳一個object!!
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Finish the course and master Vue!",
      vueLink: "https://v3.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

// 告訴vue要控管哪個元素 mount=安裝 嵌上
app.mount("#user-goal");

//v-bind 用於為html屬性設定值
//set the value of some HTML attribute
