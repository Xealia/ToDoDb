Vue.component('task-post', {        //Creates table containing task
    props: ['tasks', 'taskclient'],
    methods: {
        //Change a single task, in this case: isDone=true;
        changeChecked: function (taskId) {      
            console.log(taskId);
            const that = this;
            //Checking list of tasks to find matching Id
            const thisTask = this.tasks.filter(t => t.id === taskId)[0];
            thisTask.isDone = !thisTask.isDone;
            //Editing task
            if (thisTask.isDone) {
                thisTask.dateDone = new Date();
            }
            else {
                thisTask.dateDone = null;
            }
            console.log(thisTask);
            //Pushes changes for task with matching Id
            that.taskclient.putTask(taskId, thisTask)
                .then(function () {
                    console.log('ok');
                    that.$emit('updated'); // Runs function: readAllTasks()
                })
                .catch(function (error) { console.error(error); });
        },
        //Deletes task with matching from db
        deleteThisTask: function (taskId) {
            console.log(taskId);
            const that = this;
            that.taskclient.deleteTask(taskId)
                .then(function () {
                    console.log('ok');
                    that.$emit('updated'); // Runs function: readAllTasks()
                })
                .catch(function (error) { console.error(error); });
        }
    },
    template:
        `<table>
        <col width="45%">
        <col width="20%">
        <col width="7.5%">
        <col width="20%">
        <col width="7.5%">
            <tr>
                <th>Description</th>
                <th>Date created</th>
                <th>Done</th>
                <th>Date finished</th>
                <th></th>
            </tr>
            <tr v-for="task in tasks">
                <td>{{task.description}}</td>
                <td v-if="task.dateCreated">{{ new Date(task.dateCreated).toLocaleDateString()}}</td>
                <td v-else></td>
                <td><input type="checkbox" id="checkbox" @click="changeChecked(task.id)" v-model="task.isDone"></td>
                <td v-if="task.dateDone">{{ new Date(task.dateDone).toLocaleDateString()}}</td>
                <td v-else></td>
                <td><button type="button" @click.prevent="deleteThisTask(task.id)">Delete</button></td>
            </tr>
        </table>`
});