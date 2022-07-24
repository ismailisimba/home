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
        this.applyThisTheme("dark");
     }
        
    }

  

    addThemes (){
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            this.applyThisTheme(newColorScheme);
        });
        this.applyThisTheme("dark")
        
    }

    applyThisTheme(theme){
        if(theme==="light"){

            const batch1 = document.querySelectorAll(".navigation, .title1, h4, .social-links"); //#000
            const batch2 = document.querySelectorAll(".title1 p, .tag, .footertop");//#555555
            const footer = document.querySelectorAll("footer")[0].style.background = "#f5f5f5";
            const body = document.querySelectorAll("body")[0].style.background = "#fff";

            batch1.forEach(ele=>{ele.style.color = "#000000";});
            batch2.forEach(ele=>{ele.style.color = "#555555";});

            

        }else{
            const batch1 = document.querySelectorAll(".navia, .title1, h4, .social-links"); //#000
            const batch2 = document.querySelectorAll(".title1, .title1p, .tag");//#555555
            const footer = document.querySelectorAll("footer, footer .bottom").forEach(ele=>{ele.style.background = "#a2a9ad";});
            const body = document.querySelectorAll("body")[0].style.background = "#000000";

            const blackbatch = document.querySelectorAll(".footertop div p").forEach(ele=>ele.style.color="#000000");

            batch1.forEach(ele=>{ele.style.color = "#ffffff";});
            batch2.forEach(ele=>{ele.style.color = "#a2a9ad";});
        }
    }


}