export {titleanimation as default};
class titleanimation {
    
    constructor(){
        let counter1 =0;
        this.start = this.start;
        this.counter1 = this.counter1;
        
    }

    

    start () {
        const title = document.querySelector(".title1");
        const interval1 = window.setInterval(()=>{
            if(this.counter1==0){
                title.style.color="red";
                this.counter1++
            }else{
                title.style.color="black";
                this.counter1--
            }

        },969)
    }

}