
const colorMap = new Map();
colorMap.set('normal', 'bg-semi-wh');
colorMap.set('alert', 'bg-alert');
colorMap.set('warning', 'bg-war');
colorMap.set('succes', 'bg-succ');

const createNotice = function (name = 'Title', desc , type = 'normal', del = noop) {

    const root = document.createElement('div');
    root.classList.add('fon-size-13', 'pos-rel', 'p-14', colorMap.get(type), 'b-r-7', 'w-150', 't-wrap', 'p-Y', 'm-10');

    const delHolder = document.createElement('div');
    delHolder.classList.add('clo-noti', 'fon-size-10', 'p-r-3');
    delHolder.textContent = 'X';
    delHolder.addEventListener('click', del, true);

    const nameHolder = document.createElement('div');
    nameHolder.classList.add('f-we-700', 'fon-size-14', 'p-b-10');

    const descriptionHolder = document.createElement('div');
    descriptionHolder.classList.add('fon-size-10');

    nameHolder.innerHTML = name;
    descriptionHolder.innerHTML = desc || '';

    root.append(delHolder, nameHolder, descriptionHolder);
    console.trace(root)
    return root;

}


const noop = function () {}
export default createNotice;
