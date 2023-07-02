'use strict';

const CRAB_SIZE = 80;

export default class Field {
    constructor(clamCount, crabCount) {
        this.clamCount = clamCount;
        this.crabCount = crabCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        this.field.addEventListener('click', this.onClick);
    }

    init() {
        this.field.innerHTML = '';
        this._addItem('crab', this.clamCount, 'imgs/crab.png');
        this._addItem('clam', this.crabCount, 'imgs/clam.png');
    }

    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }


    _addItem(className, count, srcPath) {
        const x1 =0;
        const x2 = this.fieldRect.width-CRAB_SIZE;
        const y1 = 0;
        const y2 = this.fieldRect.height-CRAB_SIZE;
    
        for (let i=0; i<count ; i++) {
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src', srcPath);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            item.style.position = 'absolute';
            this.field.appendChild(item);
        }
    }

    onClick(event) {
        const target = event.target;
        if(target.matches('.clam')) {
            target.remove();
            this.onItemClick && this.onItemClick('clam');
        } else if(target.matches('.crab')) {
            this.onItemClick && this.onItemClick('crab');
        }
    }
}

function randomNumber(num1, num2) {
    return Math.random()*(num2-num1)+num1;
}