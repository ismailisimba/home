
(async () => {
    
      const anime = await import("/githome/js/titleanimation.js");
    
    return anime;
  })().then((anime)=>{
    const animate = new anime.titleanimation();
    animate.start();
  });