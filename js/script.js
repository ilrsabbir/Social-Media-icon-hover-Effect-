let icons = document.querySelectorAll(".icon");
const arr = ["#4267B2", "#000000", "#0A66C2", "#171515", "#c8232c"];
icons.forEach((icon, index) => {
    icon.addEventListener("mouseenter", () => {
        var tooltip = icon.querySelector(".tooltip");
        var arrow = tooltip.querySelector(".arrow");
        var animationBoxBg = icon.querySelector(".icon-box .animation-box-bg");
        changeStyles(tooltip, arrow, animationBoxBg, index);
    });
});
function changeStyles(tooltip, arrow, animationBoxBg, index) {
    tooltip.style.background = `${arr[index]}`;
    arrow.style.background = `${arr[index]}`;
    animationBoxBg.style.background = `${arr[index]}`;
}

