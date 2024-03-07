(() => {
    const costomAds = "https://split.to/LtMTmm5";
    let elTarget = document.querySelector(".sg-button__text");
    if (elTarget) {
        elTarget.addEventListener("click", () => {
            window.open(costomAds, "_blank");
        });
    };
})();
