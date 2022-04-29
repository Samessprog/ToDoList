export default class ListElement extends EventTarget {

    constructor (task) {
        super();
        this.root = document.createElement('div');
        this.root.classList.add('m-10','f-r', 'bg-white', 'p-10', 'b-r-7');

        const taskName = document.createElement('div');
        taskName.classList.add('b-r-7', 'max-width', 'fon-size-13');
        taskName.textContent = task;

        const buttonHolder = document.createElement('div');
        buttonHolder.classList.add('f-r', 'p-l-10');

        const completeButton = document.createElement('button')
        
        const completeIcon = document.createElement('i');
        completeIcon.classList.add('demo-icon', 'icon-edit');

        const deleteButton  = document.createElement('button')
       
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('demo-icon', 'icon-cancel-circled','c-red');
        
        this.root.append(taskName, buttonHolder);
        buttonHolder.append(completeButton, deleteButton);
        completeButton.append(completeIcon);
        deleteButton.append(deleteIcon);

        completeButton.addEventListener('click', this.completeTask.bind(this), true)
        deleteButton.addEventListener('click', this.delateTask.bind(this), true);
    }

    completeTask () {
        this.root.classList.toggle('endo');

    }

    delateTask () {
        const evt = new Event ('dismout')
        this.dispatchEvent(evt);

    }

    
}