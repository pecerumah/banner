(() => {
    const costomAds = "https://shope.ee/2fZYAwJvcW";
    let elTarget = document.querySelector(".sg-button__text");
    if (elTarget) {
        elTarget.addEventListener("click", () => {
            window.open(costomAds, "_blank");
        });
    };
})();
