const string1 = window.location.hostname.includes("ismailisimba.github.io") ? "/home" : "/githome";
(async () => {
      
    
      const anime = await import(string1+"/js/titleanimation.js");
      const theme = await import(string1+"/js/themes.js");
      //const server = await import("/githome/js/server.js");
    
    return {anime,theme};
  })().then(({anime,theme})=>{
    const themes = new theme.themes();
    const animate = new anime.titleanimation();
    animate.start();
    //console.log(themes.currentTheme);
    //themes.addThemes();
  });

