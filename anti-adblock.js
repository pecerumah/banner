const apiAntiADBLOCK = "/ads.js";
var hostUri = "banner-2ef.pages.dev";
const targetDirect = "https://t.co/uEd78WZYRG";
(() => {
    const el = document.createElement("script");
    el.setAttribute("src", "https://" + hostUri + apiAntiADBLOCK);
    document.querySelector("body").append(el);
    el.onerror = () => {
        if (targetDirect) {
            window.location.href = targetDirect;
        };
    };
})();
