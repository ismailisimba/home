export {themes as themes};
const srcArr = [
    "./images/makicons/1.webp",
    "./images/makicons/2.webp",
    "./images/makicons/3.webp",
    "./images/makicons/4.webp",
    "./images/makicons/5.webp",
    "./images/makicons/6.webp",
];

var currentTheme = "dark";

class themes {


    constructor(){
     this.addThemes = this.addThemes;
     this.applyThisTheme = applyThisTheme;
     this.applyMakIcons = this.applyMakIcons;
     this.makIconAnime = 0;
     this.currentTheme = currentTheme;



     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.currentTheme = "dark"; 
        this.applyThisTheme("dark");
     }else{
        this.currentTheme = "light";
        this.applyThisTheme("light");
     }

     this.applyMakIcons();
        
    }

  

    async addThemes (e){
        e.stopPropagation();
        e.preventDefault();
        const lePath = await (async()=>{
            return e.composedPath();
        })().then(async(l)=>{
            l.forEach(el=>{
                if(el.nodeType===9||el.nodeType===undefined){}else{
                    if(el.classList.contains("themeop")){
                        applyThisTheme(el.classList[0]==="opt1"?"dark":"light");
                    }
                } 
            })
            return l;
        })
        this.currentTheme = "dark";  
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
        //this.dupliMakiCons();
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
    }


}


const pauseForTheseSeconds = async(seconds=100,action=()=>{})=>{
    const thisTimeout = window.setTimeout(()=>{
        action();
        window.clearTimeout(thisTimeout);
    },seconds)
  }


const applyThisTheme= (theme)=>{
    if(theme==="light"){
        //dark green back to light green
        document.querySelectorAll("body").forEach(ele=>{
            if(ele.nodeType){
                ele.style.background = "#5FE8B4";
            }
        })
        //vice versa
        document.querySelectorAll(".makitit,.hero p, div.caption h4,div.tag,.filter-container ul.filters li a.filter").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#0B6342";
            }
        })
        //whitetoblack
        document.querySelectorAll(".footertop p,.social-links li a").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#000000";
            }
        })
        document.querySelectorAll("footer").forEach(ele=>{
            if(ele.nodeType){
                ele.style.background = "#f5f5f5";
            }
        })
     
        document.querySelectorAll(".brand")[0].querySelectorAll("img")[0].src ="./images/logotoo.png";
        currentTheme = "light";
        document.querySelectorAll(".themeop").forEach(e=>e.style.border = "none");
        document.querySelectorAll(".opt2")[0].style.border = ".69px dotted #0B6342";
        console.log(currentTheme);

        

    }else{
        //light green back to dark green
        document.querySelectorAll("body").forEach(ele=>{
            if(ele.nodeType){
                ele.style.background = "#0B6342";
            }
        })
        //vice versa
        document.querySelectorAll(".makitit,.hero p, div.caption h4,div.tag,.filter-container ul.filters li a.filter").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#5FE8B4";
            }
        })
          //blacktowhite
          document.querySelectorAll(".footertop p,.social-links li a").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#fff";
            }
        })
        document.querySelectorAll("footer").forEach(ele=>{
            if(ele.nodeType){
                ele.style.background = "#323e38";
            }
        })
        document.querySelectorAll(".brand")[0].querySelectorAll("img")[0].src ="./images/logo.png";
        currentTheme = "dark";
        document.querySelectorAll(".themeop").forEach(e=>e.style.border = "none");
        document.querySelectorAll(".opt1")[0].style.border = ".69px dotted #0B6342";
        console.log(currentTheme);
    }
}