Vue.component('add-post', {     //Contains input box and button to add new tasks
    props: ['task', 'taskclient'],
    data: function () {
        return { newDescription: ' ' };
    },
    methods: {
        //Adds a newly created task through Api to db
        addNewTask: function () {
            console.log('in add');
            const that = this;
            var date = new Date();
            //creates the new task
            const newTask = {
                description: this.newDescription,
                isDone: false,
                dateCreated: date
            };
            //Post new task to db
            this.taskclient.postTask(newTask)
                .then(function () {
                    console.log('ok');
                    that.$emit('updated'); // Runs function: readAllTasks()
                })
                .catch(function (error) { console.error(error); });
            console.log('out add');
        }
    },
    template:
        `<div>
            <input type="text" placeholder="Task description" v-model="newDescription" />
            <button @click="addNewTask">Add task</button>
        </div>`
});