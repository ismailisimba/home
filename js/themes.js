export {themes as themes};

class themes {


    constructor(){
     this.addThemes = this.addThemes;
     this.applyThisTheme = this.applyThisTheme;



     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.currentTheme = "dark"; 
        this.applyThisTheme("dark");
     }else{
        this.currentTheme = "light";
        this.applyThisTheme("light");
     }
        
    }

  

    addThemes (){
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            this.applyThisTheme(newColorScheme);
        });
        this.applyThisTheme(this.currentTheme)
        
    }

    applyThisTheme(theme){
        if(theme==="light"){

            const batch1 = document.querySelectorAll(".navigation, .navia, .title1, h4, .social-links, .filtera"); //#000
            const batch2 = document.querySelectorAll(".title1 p, .tag, .footertop");//#555555
            const footer = document.querySelectorAll("footer")[0].style.background = "#f5f5f5";
            const body = document.querySelectorAll("body, .navigation").forEach(ele=>ele.style.background ="#ffffff");
            

            batch1.forEach(ele=>{ele.style.color = "#000000";});
            batch2.forEach(ele=>{ele.style.color = "#555555";});
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


}