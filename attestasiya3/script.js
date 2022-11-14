
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
    class M{
    constructor(name,text,time=gettime()){
        this.name=name;
        this.time=time;
        this.text=text;
    }
    toString() {

        console.log(`${this.time} ${this.name}: ${this.text}`)
      }
      toHtml(){
        return `<p>${this.time}  ${this.name}:  ${this.text} </ p>`
    }
}
class L{
    constructor(){
        this.history=[]
    }
    send(name,text){
        this.history.push(new M(name,text,gettime()));
    }
    show_history(){
        let result=document.querySelector('.result');
        this.history.forEach(el=> result.innerHTML+=el.toHtml());

    }
}
let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    let sender=document.querySelector('.messenger');
    let message= document.querySelector('.message');
    let  T= new L();
    T.send(sender.value, message.value);
    console.log(T.history);
    let h=document.querySelector('.result');
    T.show_history();
    sender.value='';
    message.value='';
})