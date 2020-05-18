new Vue({
  el: "#app",

  data() {
    return {
      courses: [{ title: "JS",time:50 }],
      time:0,
      title:''
    };
  },

  computed: {
    totalTime () {
        const count = this.courses.reduce((acumulador, current ) => acumulador + parseInt(current.time),0)
        return count
    }
  },
  methods: {
    addCourse () {
        this.courses.push({ title: this.title, time: this.time })
    }
  },
});
