Vue.component('task-post', {
    props: ['tasks'],

    template:
       `<table>
        <col width="80%">
        <col width="10%">
        <col width="10%">
            <tr>
                <th>Description</th>
                <th>Done</th>
                <th></th>
            </tr>
            <tr v-for="task in tasks">
                <td>{{task.describtion}}</td>
                <td><input type="checkbox" id="checkbox" onclick="changeChecked()" v-model="task.isChecked"></td>
                <td><button type="button" onclick="deleteTask()">Delete</button></td>
            </tr>
        </table>`
});