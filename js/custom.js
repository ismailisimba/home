const string1 = window.location.hostname.includes("ismailisimba.github.io") ? "/home" : "/githome";
(async () => {
      
    
      const anime = await import(string1+"/js/titleanimation.js");
      const theme = await import(string1+"/js/themes.js");
      //const server = await import("/githome/js/server.js");
    
    return {anime,theme};
  })().then(({anime,theme})=>{
    const themes = new theme.themes();
    document.querySelectorAll(".themeop").forEach(e=>{
      e.addEventListener("click",themes.addThemes);
    })
    const animate = new anime.titleanimation();
    animate.start();
    
  });

