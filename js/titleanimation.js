export {titleanimation as titleanimation};
class titleanimation {
    
    constructor(){
        this.start = this.start;
        this.counter1 = 0;
        this.counter2 = {"zero":[],"one":[]}
        
    }

    

    start () {
        const title = document.querySelector(".title1");
        const interval1 = window.setInterval(()=>{
            if(this.counter1==0){
                title.style.color="red";
                this.counter1++;
            }else{
                title.style.color="black";
                this.counter1--;
            }
            console.log(this.counter1)

        },969)
    }

}