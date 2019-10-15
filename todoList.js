var ESCAPE_KEY_CODE = 27;
var ul = document.querySelector('#task-list');
var list = [];
var addButton = document.querySelector('#add');
var newTask = document.querySelector('#new-task');


addButton.addEventListener('click', function () {
    if (!list.some(x => x === newTask.value)) {
        ul.appendChild(create('li', newTask.value));
        list.push(newTask.value);
    }
});

newTask.addEventListener('keyup', function (event) {
    if (event.keyCode === ESCAPE_KEY_CODE) {
        clear();
    }
});

ul.addEventListener('dblclick', function(event){
    list.splice(list.indexOf(event.target.innerHTML),1);
    event.target.remove();
});

ul.addEventListener('click', function(event){
    var ets = event.target.style;
    ets.textDecoration = ets.textDecoration === "line-through" ? '' : 'line-through';
});

function create(element, content) {
    var element = document.createElement(element);
    element.innerHTML = content;
    return element;
}

function clear() {
    newTask.value = "";
}