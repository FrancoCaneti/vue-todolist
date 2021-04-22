const app = new Vue ({
    el: '#app',
     data : {
         todos: [
             {
                 text:'ciao',
                 completed: false,
             },
             {
                 text:'come va',
                 completed:false,
             },
         ],
         newTodo:''
     },
     methods: {
         addTodo() {
             console.log('add')
         }
     }
});