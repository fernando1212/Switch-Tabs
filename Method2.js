document.addEventListener("visibilitychange", () => {
    // it could be either hidden or visible
    document.title = document.visibilityState;    
});
