(async () => {
    
      const anime = await import("/githome/js/titleanimation.js");
      const theme = await import("/githome/js/themes.js");
      //const server = await import("/githome/js/server.js");
    
    return {anime,theme};
  })().then(({anime,theme})=>{
    const themes = new theme.themes();
    const animate = new anime.titleanimation();
    animate.start();
    //console.log(themes.currentTheme);
    themes.addThemes();
  });

