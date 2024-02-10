window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const progressBar = document.getElementById("myProgressBar");

    progressBar.style.width = scrollPercentage + "%";
});
