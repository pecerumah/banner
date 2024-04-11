const targetDirectDisableBack = "https://t.co/R1FmkkT6qN";
history.pushState(null, document.title, window.location.href);
window.addEventListener('popstate', function(event) {
    window.location.href = targetDirectDisableBack;
});
window.addEventListener('scroll', function() {
    history.pushState(null, document.title, window.location.href);
});
