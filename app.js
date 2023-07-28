const app = Vue.createApp({
  //data, functions
  //template: '<h2>I am the template</h2>'
  data() {
    return {
      //url: 'http://www.thenetninja.co.uk',
      showBook: true,
      books: [
        {
          title: 'Name of the Wind',
          author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true
        },
        {
          title: 'The Way of Kings',
          author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false
        },
        {
          title: 'The Final Empire',
          author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true
        },
      ]
    }
  },
  methods: {
    //changeTitle(title) {
    //this.title = 'Words of Radiance'
    //this.title = title

    toggleShowBook() {
      this.showBook = !this.showBook
    },

    toggleFav(book) {
      book.isFav = !book.isFav
    }

    //mouse event function 
    //handleEvent(e, data) {
    //  console.log(e, e.type)
    // if (data) {
    //   console.log(data)
    // }
    //},
    //handleMousemove(e) {
    //this.x = e.offsetX
    //this.y = e.offsetY
    //}
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount('#app')