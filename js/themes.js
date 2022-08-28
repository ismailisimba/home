export {themes as themes};
const srcArr = [
    "./images/makicons/1.webp",
    "./images/makicons/2.webp",
    "./images/makicons/3.webp",
    "./images/makicons/4.webp",
    "./images/makicons/5.webp",
    "./images/makicons/6.webp",
];

class themes {


    constructor(){
     this.addThemes = this.addThemes;
     this.applyThisTheme = this.applyThisTheme;
     this.applyMakIcons = this.applyMakIcons;
     this.makIconAnime = 0;



     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.currentTheme = "light"; 
        this.applyThisTheme("light");
     }else{
        this.currentTheme = "light";
        this.applyThisTheme("light");
     }

     this.applyMakIcons();
        
    }

  

    addThemes (){
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            this.applyThisTheme("light");
        });
        this.applyThisTheme(this.currentTheme)
        
    }

    applyThisTheme(theme){
        if(theme==="light"){

            const batch1 = document.querySelectorAll(".navigation, .navia, .title1, h4, .social-links, .filtera"); //#000
            const batch2 = document.querySelectorAll(".title1 p, .tag, .footertop");//#555555
            const footer = document.querySelectorAll("footer")[0].style.background = "#f5f5f5";
            const body = document.querySelectorAll("body, .navigation").forEach(ele=>ele.style.background ="#19E396");
            

            batch1.forEach(ele=>{ele.style.color = "#000000";});
            batch2.forEach(ele=>{ele.style.color = "#0B6342";});
            document.styleSheets[2].insertRule('.l3:before { border-left: 1px solid black !important; }', 0);
            document.querySelectorAll(".brand")[0].querySelectorAll("img")[0].src ="./images/logotoo.png";

            

        }else{
            const batch1 = document.querySelectorAll(".navia, .title1, h4, .social-links, .filtera"); //#000
            const batch2 = document.querySelectorAll(".title1, .title1p, .tag");//#555555
            const footer = document.querySelectorAll("footer, footer .bottom").forEach(ele=>{ele.style.background = "#a2a9ad";});
            const body = document.querySelectorAll("body, .navigation").forEach(ele=>ele.style.background ="#000000");
            const body2 = document.querySelectorAll(".bar ").forEach(ele=>ele.style.background ="#ffffff");

            const blackbatch = document.querySelectorAll(".footertop div p").forEach(ele=>ele.style.color="#000000");

            batch1.forEach(ele=>{ele.style.color = "#ffffff";});
            batch2.forEach(ele=>{ele.style.color = "#a2a9ad";});
            document.styleSheets[2].insertRule('.l3:before { border-left: 1px solid white !important; }', 0);
            document.querySelectorAll(".brand")[0].querySelectorAll("img")[0].src ="./images/logo.png";
        }
    }

    applyMakIcons (){
        const time = 6942;
        var counter = 0;
        const makIconAnime = window.setInterval(()=>{
//            const img = document.querySelectorAll(".framesmom")[0].querySelectorAll("img")[0];
  //          const imgClone = img.cloneNode(true);
            //imgClone.style.top = "0px";
         
            document.querySelectorAll(".framesmom").forEach(ele=>{
                const img = ele.querySelectorAll("img")[0];
                const imgClone = img.cloneNode(true);
                //imgClone.style.top = "0px";    
            if(counter < srcArr.length-1){
                imgClone.src = srcArr[counter];
                imgClone.style.top = "0px";
                img.parentNode.appendChild(imgClone);
                img.style.transform = "translate(190px,0)";
                pauseForTheseSeconds(1000,()=>{
                    img.remove();
                }).then(pauseForTheseSeconds(100,()=>{
                    imgClone.style.top = "-169px";
                }))
                //counter++;
            }else{
                imgClone.src = srcArr[counter];
                imgClone.style.top = "0px";
                img.parentNode.appendChild(imgClone);
                img.style.transform = "translate(190px,0)";
                pauseForTheseSeconds(1000,()=>{
                    img.remove();
                }).then(pauseForTheseSeconds(100,()=>{
                    imgClone.style.top = "-169px";
                }))
                //counter = 0;
            } 
            })
            
            if(counter<srcArr.length-1){
                    counter++;
            }else{
                    counter = 0;
            }
        },time);
        this.dupliMakiCons();
        this.makIconAnime = makIconAnime;
    }

    dupliMakiCons(){
        const maKiCon = document.querySelectorAll(".framesmom")[0];
        maKiCon.remove();
        const mom = document.querySelectorAll(".momofall")[0];
        const momStyles = window.getComputedStyle(document.querySelectorAll(".momofall")[0]);
        
        const width = parseFloat(momStyles.getPropertyValue("width")
        .slice(0,momStyles.getPropertyValue("width").length-2));
        const height = parseFloat(momStyles.getPropertyValue("height")
        .slice(0,momStyles.getPropertyValue("height").length-2));

        var theHeight = 110;
        var theWidth = 187;

        const columns = parseInt(width/theWidth);
        

        for(let i = 0; i < 2; i++){
            for(let j = 0; j < columns; j++){
                const elClone = maKiCon.cloneNode(true);
                elClone.style.top = `${theHeight+16}px`;
                elClone.style.left = `${theWidth-120}px`;
                mom.appendChild(elClone);
                theWidth = theWidth + 187;
            }
            theWidth = 187;
            theHeight = theHeight + 269;
        }
        console.log({width,height,columns})
    }


}


const pauseForTheseSeconds = async(seconds=100,action=()=>{})=>{
    const thisTimeout = window.setTimeout(()=>{
        action();
        window.clearTimeout(thisTimeout);
    },seconds)
  }