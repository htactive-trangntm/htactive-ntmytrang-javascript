class ToDoClass {
    
    constructor() {
        this.deletedTask=[];
        this.indexDeleted;
        this.tasks = JSON.parse(localStorage.getItem ('tasks'))||[]
        this.loadTasks(this.tasks)
        this.addEventListener();
        localStorage.setItem('status', JSON.stringify(false));
    }

    addEventListener(){
        document.getElementById('addTask').addEventListener('keypress', event => {
            if(event.keyCode === 13 ){
                this.addTask(event.target.value);
                event.target.value = "";
            }
        });
    }

    completeTodo= (index)=> {
        if(this.tasks[index].isComplete==true){
            this.tasks[index].isComplete=false;
            this.loadTasks();
        }
        else{
            this.tasks[index].isComplete=true;
            this.loadTasks();
        }    
    }

    //delete task
    deleteTodo = (event,id) => {
        document.getElementById("undo").style.display="block";
        let index = this.tasks.findIndex(k=>k.id==id)
        this.deletedTask = this.tasks[index];
        this.indexDeleted = index;
        console.log(index)
        let el = document.getElementById('seconds-counter');
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.loadTasks(this.tasks);
        let second=6;
        let countSecond = setInterval(() => {
            console.log(second-=1);
            if(second==0){
                clearInterval(countSecond); 
                document.getElementById("undo").style.display="none";
            }
        }, 1000);
    }

    //undo delete task
    undoDelete = () => {
        this.tasks.splice(this.indexDeleted, 0, this.deletedTask)
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        document.getElementById("undo").style.display="none";
        this.loadTasks(this.tasks);
    }

    //click add task
    addTaskClick = () => {
        let task = document.getElementById('addTask').value;
        this.addTask(task);
        document.getElementById('addTask').value = "";
    }

    //add task
    addTask = (task) => {
        let newTask = {id: this.makeid(10),task,isComplete: false};
        if(this.tasks.findIndex(k=>k.task == task)==-1){
            this.tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            this.loadTasks();
        }
        else alert("the task exist")

        
    }

    //string random for id
    makeid = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    //select all task
    selectAllTask = () => {
        let count = 0;
        let selectAll = [];
        this.tasks.forEach(element => {
            element.isComplete = true
            selectAll.push(element);
            count++;
        });
        
        return this.loadTasks(selectAll) 
    }
    

    //edit task
    editTodo = (event,id) => {
        let index = this.tasks.findIndex(k=>k.id == id)
        if(this.tasks[index].isComplete == false){
            document.getElementById("add").style.display="none";
            document.getElementById("edit").style.display="block";
            document.getElementById("addTask").value= this.tasks[index].task;
            document.getElementById("edit").value=index;
            //this.loadTasks(this.tasks)
        }
        else{
            alert("This is completed")
        }
        
    }


    editTaskClick = () => {
        let taskEdited = document.getElementById("addTask").value;
        let index = document.getElementById("edit").value;
        console.log(index);
        this.tasks[index].task = taskEdited;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        document.getElementById('addTask').value = ""
        this.loadTasks(this.tasks)  
        
    }

    generateTaskHtml = (task, index) => {
        return `
            <li class="list-group-item checkbox">
                <div class="row">
                    <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                        <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.completeTodo(${index})" value="" class="" ${task.isComplete ? 'checked' : ''}></label>
                    </div>
                    <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete ? 'complete' : ''}">
                         ${task.task} 
                    </div>
                    <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                    <a class="" id="save" onClick="toDo.editTodo(event, '${task.id}')" style="display:none"><i id="saveTask" data-id="${index}" class="glyphicon glyphicon-floppy-save"></i></a>
                    &nbsp;
                    <a class="" onClick="toDo.editTodo(event, '${task.id}')"><i id="editTask" data-id="${index}" class="glyphicon glyphicon-edit"></i></a>
                    &nbsp;
                    <a class=""  onClick="toDo.deleteTodo(event, '${task.id}')"><i id="deleteTask" data-id="${index}" class="delete-icon glyphicon glyphicon-trash"></i></a>
                    </div>
                </div>
            </li>
        `;
    }

    loadTasks = (listTask) => {
        if(listTask){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            let taskHtml = listTask.reduce((html, task, index) => html += this.generateTaskHtml(task, index), "");
            document.getElementById('taskList').innerHTML = taskHtml;
        }
        else{
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            let taskHtml = JSON.parse(localStorage.getItem ('tasks')).reduce((html, task, index) => html += this.generateTaskHtml(task, index), "");
            document.getElementById('taskList').innerHTML = taskHtml;
        }
        let count=0;
        let elem = document.getElementById("myBar");   
        this.tasks.forEach(element => {
            if(element.isComplete===true)
            count++;
        });
        document.getElementById("add").style.display="block";
        document.getElementById("edit").style.display="none";
        elem.style.width=Math.round(count/this.tasks.length*100)+ "%"
        elem.innerHTML = Math.round(count/this.tasks.length*100)+ "%";


    }

    //filter completed task
    completed  = () => {
        let filterCompleted = [];
        this.tasks.forEach(element => {
            if(element.isComplete === true){
                filterCompleted.push(element);
            }
        });
        return this.loadTasks(filterCompleted)
    }

    //filter active task
    active = () => {
        let filterActive = [];
        this.tasks.forEach(element => {
            if(element.isComplete === false){
                filterActive.push(element);
            }
        });
        return this.loadTasks(filterActive)
    }

    //filterAlltask

    allTasks = () => {
        let filterAlltask = [];
        this.tasks.forEach(element => {
            filterAlltask.push(element);
        });
        return this.loadTasks(filterAlltask);
    }

}

let toDo;
window.addEventListener("load", () => {
  toDo = new ToDoClass();
});