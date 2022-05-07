window.addEventListener("load",function() {
    console.log("works");
    //dropdown
    //grab element by id + add event whenever click follow by function
    document.getElementById("menu").addEventListener("click", openMenu);
    function openMenu() {
        document.getElementById("dropdown").classList.toggle("active");
    }
})