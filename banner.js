const mapNextAds = ["https://banner-2ef.pages.dev/costom-botton-shoope.js", "https://banner-2ef.pages.dev/main.js", "https://banner-2ef.pages.dev/detect-click.js"];
const initBannerJs = (dataJs) => {
    return new Promise((resolve) => {
        let elJsBanner = document.createElement("script");
        elJsBanner.setAttribute("src", dataJs);
        document.body.append(elJsBanner);
        elJsBanner.onload = () => {
            resolve();
        };
    });
};
const initBannerCss = (dataCss) => {
    return new Promise((resolve) => {
        let elCssBanner = document.createElement("link");
        elCssBanner.setAttribute("rel", "stylesheet");
        elCssBanner.setAttribute("type", "text/css");
        elCssBanner.setAttribute("href", dataCss);
        document.head.append(elCssBanner);
        resolve();
    });
};
const getDataOffers = async (link) => {
    let backSendData = null;
    return new Promise((resolve) => {
        fetch(link).then(response => response.json()).then(function(data) {
            try {
                const keyOffer = data.offers;
                const randomKeyOffer = keyOffer[parseInt(Math.random() * keyOffer.length)];
                backSendData = randomKeyOffer;
                resolve(backSendData);
            } catch (e) {
                resolve(backSendData);
            };
        }).catch((error) => {
            resolve(backSendData);
        });
    });
};

function loadNextAds() {
    (() => {
        for (let dataMapAds of mapNextAds) {
            const elMapAds = document.createElement("script");
            elMapAds.setAttribute("src", dataMapAds);
            document.querySelector("body").append(elMapAds);
        };
        window.scrollTo({
            top: 0
        });
    })();
};
let statusClickSwallClose = false;

function closeSwallFromAdClick() {
    statusClickSwallClose = true;
    Swal.close();
};
(async () => {
    const urlOpenClick = "https://shope.ee/2fZYAwJvcW";
    let urlOpenClick2 = "";
    await initBannerJs("https://banner-2ef.pages.dev/sweetalert2.min.js");
    await initBannerCss("https://banner-2ef.pages.dev/sweetalert2.min.css");
    Swal.fire({
        title: "",
        html: `<img src="https://1.bp.blogspot.com/-nlqvvJ_JgBs/XlxgNLgcV8I/AAAAAAAAAbE/mwN5sLT7N-8iYjX3-JpPgoh28nlykIGlgCPcBGAYYCw/s320/3_3%2Bshopee%2Bmega%2Blogo.png" />`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Please Wait...',
        didOpen: async () => {
            let buttonAdsConfirm = Swal.getConfirmButton();
            await buttonAdsConfirm.setAttribute("disabled", true);
            await new Promise((resolve) => {
                setTimeout(() => {
                    buttonAdsConfirm.removeAttribute("disabled");
                    buttonAdsConfirm.innerText = "Close ADS";
                    resolve();
                }, 2000);
            });
        },
        willClose: () => {
            if (statusClickSwallClose == false) {
                if (locCountry && locCountry == "ID") {
                    window.open(urlOpenClick, "_blank");
                } else {
                    window.open(urlOpenClick2, "_blank");
                };
            };
            loadNextAds();
        }
    });
})();
