var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue and A-Frame',
    textColor: 'blue',
    cubes: [{position: "1.5 0.2 -3", color: 'red'}, {position: "-0.5 0.2 -3", color: 'green'}]
  },
  methods: {
    handleTextInput: function (evt) {
      this.message = evt.target.value;
    }
  }
})
