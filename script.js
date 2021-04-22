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
         //inserisci un nuovo elemento
         addTodo() {
             console.log('add');

             if(this.newTodo.trim() !== '') {
                 this.todos.push ({
                     text: this.newTodo,
                     completed: false,
                 });
                 this.newTodo = '';
                 this.$refs.todoInput.focus();
             }
         },
            //remove Todo

            @param {number} indexed
           removeTodo(index) { 
               this.todos.splice(index,1);
               const deleted = this.todos.splice(index,1) [0];
           }

           //Update todo
          @ param   {number} index
           updateStatus(imdex) {
               this.todos[index].completed = ! this.todos[index].
               completed;
           }
        
     }
});