"use strict";

function HtmlElement(){
    this.click() = () => {
        console.log('click');
    }
    
}

HtmlElement.prototype.focus = ()=>{console.log('foucs')};

function HtmlSelectElement(items = []){
    this.items = items;

    this.addItem() = function(item){
        this.items.push(item);
    }
    this.removeItem() = (item) => {
        this.items.splice(this.items.indexOf(item),1);
    }

    this.render() = () =>{ {
        return `<select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
            <select/>`
            
    }}
}

function HtmlImgElement(src){
    this.src = src;
    this.render = ()=>{
        return `<img src="${this.src}" />`
    }
}

HtmlSelectElement.prototype  = new HtmlElement();
HtmlSelectElement.prototype.consturctor = HtmlSelectElement;

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.consturctor = HtmlImgElement;