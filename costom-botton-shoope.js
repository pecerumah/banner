(() => {
    const costomAds = "https://t.co/geQgJOacoF";
    let elTarget = document.querySelector(".sg-button__text");
    if (elTarget) {
        elTarget.addEventListener("click", () => {
            window.open(costomAds, "_blank");
        });
    };
})();
