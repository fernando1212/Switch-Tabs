document.addEventListener("visibilitychange", () => {
    // it could be either hidden or visible
    document.title = document.visibilityState;    
});


//You can use these to add many functionality to your website such as stop music or video when the user loses focus
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === 'visible') {
    music.play();
  } else {
    music.pause();
  }
});
