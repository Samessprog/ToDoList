import ListElement from "./ListElement.js";
import createNotice from "./notice.js";

export default class Menu {

    constructor() {


        this.notices = {};
        this.id = 0;

        this.title = document.getElementById('addTaskNames');

        const addButton = document.getElementById('addTask');
        addButton.addEventListener('click', this.addTask.bind(this), true);
        this.taskName = document.getElementById('addTaskName');
        this.taskList = document.getElementById('taskList');

        this.noticesContainer = document.getElementById('noticesContainer');

        const addNormalNotice = document.getElementById('createNormal');
        const addAlertNotice = document.getElementById('createAlert');
        const addWarningNotice = document.getElementById('createWarning');
        const addSuccesNotice = document.getElementById('createSucces');
        /* 
        const notiElements = {
            'normal': addNormalNotice,
            'alert': addAlertNotice,
            'warning': addWarningNotice,
            'succes': addSuccesNotice
        }


        for (const [type, node] of Object.entries(notiElements)) {
            node.addEventListener('click', this.createNot.bind(this,type),true);   

        }
        */
       
        const noticeevent = [[addNormalNotice, 'normal'], [addAlertNotice, 'alert'], [addWarningNotice, 'warning'], [addSuccesNotice, 'succes']];

        for (let i = 0; i < noticeevent.length; ++i) {
            noticeevent[i][0].addEventListener('click', this.createNot.bind(this, noticeevent[i][1]), true);

       }
    }


    async createNot(type) {
        const title = this.title.value === '' ? undefined : this.title.value;
        const desc = this.taskName.value === '' ? undefined : this.taskName.value;
        
        const notice = await createNotice(title, desc, type, this.removeNotice.bind(this, this.id));
        this.notices[this.id] = notice;
        this.noticesContainer.append(notice);
        ++this.id;


    }

    removeNotice(id) {
        let node = this.notices[id];
        this.noticesContainer.removeChild(node);
        delete this.notices[id];

    }

    addTask() {
        const element = new ListElement(this.taskName.value);
        this.taskList.append(element.root);
        element.addEventListener('dismout', this.handleDismout.bind(this), true);
    }

    handleDismout({ target }) {
        this.taskList.removeChild(target.root);
    }

}


window.menu = Menu;


