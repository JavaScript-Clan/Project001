import view from "./views/view.js";


// Initialization function, will be called as soon as the DOM is formed and the scripts are executed.
function init(){
    ["hashchange","load"].forEach(event => {
        window.addEventListener(event, function(){
            const subURL = this.location.hash.slice(1);
            if (!subURL) view.defaultPage();
            if (subURL==="/cart") view.cartPage();
        })
    })
    view.addHandlerNavPopup();
    view.addHandlerSideView();
}

init();