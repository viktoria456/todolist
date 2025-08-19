const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
}
const tasks = [];

//добавить задачу отслеживание клик по кнопке добавления
dom.add.onclick = () => {
    const newTaskText = dom.new.value
    if(newTaskText && isNotHaveTask(newTaskText,tasks)) {
        addTask(newTaskText, tasks)
        dom.new.value = ''
        tasksRender(tasks)

    }
}
//функция добавления задачи
function addTask(text, list) {
    const timestamp = Date.now()
    const task = {
        id: timestamp,
        text,
        isComplete: false
    }
list.push(task)
}
//проверка существания задачи в списке задач
function isNotHaveTask(text, list){
    let isNotHave = true


    list.forEach((task) => {
        if(task.text === text) {
            alert('Задача уже сущетсвует!!!!!!')
            isNotHave = false
        }
    })
    return isNotHave

}

//функция вывода списка задач
function tasksRender(list) {
    let htmlList = ''

    list.forEach((task) =>{
        const cls = task.isComplete 
        ? 'todo_task todo_task_complete' 
        : 'todo_task'
        const checked = task.isComplete ? 'checked' : ''

        const taskHtml = `
            <div id="${task.id}" class ="${cls}">
        <label class="todo_checkbox">
            <input type="checkbox"${checked}>
            <div></div>
        </label>
        <div class="todo_task_title">${task.text}</div>
        <div class="todo_task-del">-</div>
    </div>
        `

        htmlList = htmlList + taskHtml
    })
    dom.tasks.innerHTML = htmlList
}
