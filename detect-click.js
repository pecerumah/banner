(() => {
        const urlDirectClick = "https://shope.ee/2fZYAwJvcW";
        document.querySelectorAll("a").forEach(element => {
                    element.setAttribute("target", "_blank");
                    element.addEventListener("click", event => {
                                const isTargetBlank = event.target.target === "_blank";
                                const isShortcutKeyPressed = event.ctrlKey || event.shiftKey || event.metaKey;
