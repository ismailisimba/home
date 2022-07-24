(async () => {
    
      const anime = await import("/githome/js/titleanimation.js");
      //const theme = await import("/githome/js/themes.js");
      //const server = await import("/githome/js/server.js");
    
    return anime;
  })().then((anime)=>{
    const animate = new anime.titleanimation();
    console.log(animate);
    animate.start();
    //animate.doTitleAnimation();
  });


  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log(newColorScheme)
});


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("dark");
}else{
    console.log("light");
}