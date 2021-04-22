const app = new Vue ({
    el: '#app',
    data:{
        todos:[
            {
              text:'Fare la spesa',
              completed:false,
            } ,

            {
              text:'Pulire casa',
              completed:false,
            } ,

            {
              text:'Portare fuori il cane',
              completed:false,
             } ,
        ],
        newTodo:'',
        
    
    },
    methods: {
        //inserire in nuovo todo nella lista

        addTodo(){


            if(this.newTodo !== ''){
                this.todos.push({
                    text:this.newTodo,
                    completed:false
                });
                this.newTodo ='';
                this.$refs.todoInput.focus();
            }
        }
    }
});