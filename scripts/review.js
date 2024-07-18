window.onload = () => {
    var loadCount = localStorage.getItem("loadCount");
    if (isNaN(loadCount)) {
        loadCount = 0;
    }
    localStorage.setItem("loadCount", ++loadCount);
    document.getElementById("counter").innerText = "Counter: " + loadCount;
}