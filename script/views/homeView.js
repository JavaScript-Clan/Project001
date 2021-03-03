class HomeView{
    _navContainer = document.querySelector(".nav__list");
    _previewContainer = document.querySelector(".nav-preview");
    _popUps = this._previewContainer.children;
    addHandlerNavPopup(){
        this._navContainer.addEventListener('mouseover',(function(e){
            const target = e.target.closest(".nav__item");
            if (!target) return;
            const dataPopup = target.classList[1].slice(11);
            const popUp = [...this._popUps].find(popUp => popUp.dataset.popup === dataPopup);
            [...this._popUps].forEach(popUp => popUp.style.display = "none");
            popUp.style.display = "flex";
        }).bind(this));

        this._navContainer.addEventListener('mouseout',(function(e){
            [...this._popUps].forEach(popUp => popUp.style.display = "none");
        }).bind(this));

        [...this._popUps].forEach((popUp) => {
            popUp.addEventListener("mouseover", function(){
                this.style.display = "flex"
            })
            popUp.addEventListener("mouseout", function(){
                this.style.display = "none"
            })
        })

    }
}

export default new HomeView();