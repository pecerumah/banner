const apiAntiADBLOCK = "/ads.js";
var hostUri = "banner-2ef.pages.dev";
const targetDirect = "https://split.to/LtMTmm5";
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
