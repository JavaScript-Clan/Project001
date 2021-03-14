class View{
    // NAV POPUPS SELECTION ELEMENTS
    _navContainer = document.querySelector(".nav__list");
    _previewContainer = document.querySelector(".nav-preview");
    _popUps = this._previewContainer.children;
    // MENU CLICK SELECTION ELEMENTS
    _menu = document.querySelector(".nav__icon--menu");
    _sideNav = document.querySelector(".side-nav");
    _closeBtn = document.querySelector(".side-nav__close");
    _overlay = document.querySelector(".overlay");
    // Page SELECTION ELEMENTS
    _sectionCart = document.querySelector(".section-cart");
    _viewCartBtn = document.querySelector(".btn-cart");
    _mainContainer = document.querySelector(".container");
    _footer = document.querySelector(".footer");


    constructor(){
        this._viewCartBtn.addEventListener('click',function(){
            window.location.hash+="/cart";
        })
    }


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

    _toogleSideView(offsetPercent,overlayDisplay){
        this._sideNav.style.transform = `translateX(${offsetPercent}%)`;
        this._closeBtn.style.transform =  `translateX(${offsetPercent < 0 ? offsetPercent + 125 : offsetPercent}%)`;
        this._overlay.style.display = overlayDisplay;
    }

    addHandlerSideView(){
        this._menu.addEventListener("click", this._toogleSideView.bind(this,0,"block"));
        this._closeBtn.addEventListener("click", this._toogleSideView.bind(this,-150,"none"));
        this._overlay.addEventListener("click", this._toogleSideView.bind(this,-150,"none"));
        window.addEventListener("keydown",(function(e){
            if (e.key !== 'ESCAPE') return;
            this._toogleSideView(-150,"none");
        }.bind(this)))
    }

    ///////////////////////////////////////////////////////////////////////////////////////
    // CART VIEW
    cartPage(){
        this._mainContainer.classList.add("hidden");
        const markUp = this._generateMarkup();
        const scriptMarkUp = this._scriptMarkup();
        this._sectionCart.innerHTML = '';
        this._sectionCart.insertAdjacentHTML("afterbegin",markUp);
        /// Triumph JS code
        const cancelBtn = document.querySelectorAll('.btn-cancel');
        let nextbtn = document.querySelectorAll('.btn-next');
        let sectionsheader = document.querySelectorAll('.sections__header li');
        cancelBtn.forEach(cb => {
            cb.addEventListener('click',function(){window.location.hash=""})
        })
        nextbtn.forEach(nextbtn__each => {
            nextbtn__each.addEventListener('click', next);
        });

        function next(e) {
            e.preventDefault();
            let thispage = this.parentElement.parentElement.parentElement;
            thispage.classList.remove('active');
            thispage.nextElementSibling.classList.add('active');

            sectionsheader.forEach(sectionsheader__each => {

                let sectionid = thispage.nextElementSibling.getAttribute('id');
                let activelist = sectionsheader__each.getAttribute('data-preview');

                if (sectionid == activelist) {
                    sectionsheader__each.classList.add('active');
                    sectionsheader__each.previousElementSibling.classList.remove('active');
                }

            });

        }
    }
    defaultPage(){
        this._sectionCart.innerHTML = '';
        this._mainContainer.classList.remove("hidden");
    }
    _generateMarkup(){
        return `
        <main class= "container2">
            <nav>
                <ol class="sections__header">
                    <li class="active" data-preview="Shopping">Shopping Cart</li>
                    <li data-preview="Shipping">Shipping Details</li>
                    <li data-preview="Payment">Payment Options</li>
                </ol>
            </nav>

            <div class="cart__container active" id="Shopping">
                <div class="product__container">
                    <h3 class="title">Shopping Cart</h3>
                    <div class="product__desc">

                        <figure class="cart__products">
                            <img src="../image/Wifi_2.jpg" alt="TBS cart product" class="">
                            <figcaption class="">
                                <span class="cart__products__name">Imose universal 4G LTE MiFi</span>
                                <span class="product__info">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, assumenda.
                                </span>
                                <span class="cart__products__price">£15.99</span>

                            </figcaption>

                            <div class="product__no">
                                <input type="number" name="" value="1">
                            </div>
                        </figure>


                        <figure class="cart__products">
                            <img src="../image/Wifi_16.jpg" alt="TBS cart product" class="">
                            <figcaption class="">
                                <span class="cart__products__name">Ntel 4G LTE MiFi Mobile Hotspot</span>
                                <span class="product__info">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, assumenda.
                                </span>
                                <span class="cart__products__price">£10.99</span>
                            </figcaption>
                            <div class="product__no">
                                <input type="number" name="" value="1">
                            </div>
                        </figure>

                        <figure class="cart__products">
                            <img src="../image/Wifi_21.jpg" alt="TBS cart product" class="">
                            <figcaption class="">
                                <span class="cart__products__name">ZTE LTE MiFi – Unlock MiFi for all devices</span>
                                <span class="product__info">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, assumenda.
                                </span>
                                <span class="cart__products__price">£30.59</span>
                            </figcaption>
                            <div class="product__no">
                                <input type="number" name="" value="1">
                            </div>
                        </figure>

                    </div>
                    <div class="btn__container">
                        <button class="button btn-next">Next</button>
                        <button class="button btn-cancel">Contiue shopping</button>
                    </div>

                </div>
                <div class="product__summary">
                    <h3 class="title">Summary</h3>

                    <div class="price__container">
                        <div class="code">
                            <h4>ENTER COUPON CODE</h4>
                            <input type="text">
                        </div>
                        <div class="info__calculations">
                            <div class="row">
                                <span>Subtotal</span>
                                <span> £57.57</span>
                            </div>
                            <div class="row">
                                <span>Shipping</span>
                                <span> free</span>
                            </div>
                            <div class="row">
                                <span>Taxes</span>
                                <span> £3.00</span>
                            </div>

                            <div class="row row__total">
                                <span>Total</span>
                                <span> £58.57</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart__container" id="Shipping">
                <div class="product__container">
                    <h3 class="title">Shipping Details</h3>
                    <div class="product__desc">

                        <form action="">
                            <div class="half-row">
                                <input type="text" name="Fname" placeholder="First Name">
                                <input type="text" name="Lname" placeholder="Last Name">
                            </div>
                            <div class="address">
                                <input type="text" name="address" placeholder="Address">
                                <input type="text" name="address" placeholder="Address">
                            </div>
                            <div class="half-row">
                                <select name=" ">
                                    <option value="Country">Country</option>
                                </select>

                                <input type="text" name="" placeholder="City">
                            </div>

                            <div class="half-row">
                                <input type="text" name="" placeholder="Zip/Postal Code">
                                <input type="tel" name="" placeholder="Phone Number">
                            </div>
                        </form>

                    </div>

                    <div class="product__desc product__summary__desc">
                        <form action=" ">
                            <div class="half-row">
                                <input type="radio" name="shipping" id="shipping">
                                <label for="free">
                                    <span>Free Shipping</span>
                                    <span>Between 2 - 5 working days</span>
                                </label>
                            </div>

                            <div class="half-row ">
                                <input type="radio" name="shipping">
                                <label for="nxtday">
                                    <span>Next Day Delivery - <i> $20</i></span>
                                    <span>24 hours from checkout</span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div class="btn__container ">
                        <button class="button btn-next ">Next</button>
                        <button class="button btn-cancel ">Cancel</button>
                    </div>

                </div>
                <div class="product__summary ">
                    <h3 class="title ">Summary</h3>

                    <div class="cart__div ">
                        <figure class="cart ">
                            <img src="../image/Wifi_2.jpg " alt="TBS cart product " class=" ">
                            <figcaption class="cart__desc ">
                                <span class="cart__name ">Imose universal 4G LTE MiFi</span>
                                <span class="cart__price ">£15.99</span>
                            </figcaption>
                        </figure>

                        <figure class="cart ">
                            <img src="../image/Wifi_16.jpg " alt="TBS cart product " class="cart__product ">
                            <figcaption class="cart__desc ">
                                <span class="cart__name ">Ntel 4G LTE MiFi Mobile Hotspot</span>
                                <span class="cart__price ">£10.99</span>
                            </figcaption>
                        </figure>
                        <figure class="cart ">
                            <img src="../image/Wifi_21.jpg " alt="TBS cart product " class="cart__product ">
                            <figcaption class="cart__desc ">
                                <span class="cart__name ">ZTE LTE MiFi – Unlock MiFi for all devices</span>
                                <span class="cart__price ">£30.59</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="info__calculations ">
                        <div class="price__container ">

                            <div class="row ">
                                <span>Subtotal</span>
                                <span> £57.57</span>
                            </div>
                            <div class="row ">
                                <span>Shipping</span>
                                <span> free</span>
                            </div>
                            <div class="row ">
                                <span>Taxes</span>
                                <span> £3.00</span>
                            </div>

                            <div class="row row__total ">
                                <span>Total</span>
                                <span> £58.57</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="cart__container" id="Payment">
                <div class="product__container">
                    <h3 class="title">Payment methods</h3>
                    <div class="product__desc credit__card">

                        <form action=" ">
                            <div class="half-row product__shipping ">
                                <input type="radio" name="shipping " id="shipping ">
                                <label for="shipping ">
                                    <span>Credit Card</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quam!</span>
                                </label>
                            </div>

                            <div class="half-row group ">
                                <div class="card-number ">
                                    <input type="text" id="first " class="cc-num " type="text " maxlength="4 " placeholder="&#9679;&#9679;&#9679;&#9679; ">
                                    <input type="text" id="second " class="cc-num " type="text " maxlength="4 " placeholder="&#9679;&#9679;&#9679;&#9679; ">
                                    <input type="text" id="third " class="cc-num " type="text " maxlength="4 " placeholder="&#9679;&#9679;&#9679;&#9679; ">
                                    <input type="text" id="fourth " class="cc-num " type="text " maxlength="4 " placeholder="&#9679;&#9679;&#9679;&#9679; ">
                                </div>
                                <div class="card-expiry ">
                                    <input type="text" class="month " id="expiry " placeholder="MM ">
                                    <input type="text" placeholder="/ " disabled>
                                    <input type="text" class="year " placeholder="YY ">
                                </div>
                                <div class="card-cvv ">
                                    <input type="text" class="cvv " maxlength=3 placeholder="CVV ">
                                </div>
                            </div>
                            <input type="text" name=" " placeholder="Card Holder Name " class="Card-no ">

                        </form>

                    </div>

                    <div class="product__desc paypal__payment ">
                        <div class="half-row product__shipping product__paypal__shipping ">
                            <input type="radio" name="paypal " id="paypal " class="paypal__radio ">
                            <label for="paypal ">
                                    <span>Paypal</span>
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quaerat eum sapiente ullam perspiciatis earum ratione excepturi minima omnis quae!</span>
                                </label>
                            <img src="./../image/paypal_logo.png " alt="Paypal logo ">
                        </div>
                    </div>
                    <div class="btn__container">
                        <button class="button btn-pay">Pay Now</button>
                        <button class="button btn-cancel">Contiue shopping</button>
                    </div>

                </div>
                <div class="product__summary ">
                    <h3 class="title ">Summary</h3>

                    <div class="cart__div ">
                        <figure class="cart ">
                            <img src="../image/Wifi_2.jpg " alt="TBS cart product " class=" ">
                            <figcaption class="cart__desc ">
                                <span class="cart__name ">Imose universal 4G LTE MiFi</span>
                                <span class="cart__price ">£15.99</span>
                            </figcaption>
                        </figure>

                        <figure class="cart ">
                            <img src="../image/Wifi_16.jpg " alt="TBS cart product " class="cart__product ">
                            <figcaption class="cart__desc ">
                                <span class="cart__name ">Ntel 4G LTE MiFi Mobile Hotspot</span>
                                <span class="cart__price ">£10.99</span>
                            </figcaption>
                        </figure>
                        <figure class="cart ">
                            <img src="../image/Wifi_21.jpg " alt="TBS cart product " class="cart__product ">
                            <figcaption class="cart__desc ">
                                <span class="cart__name ">ZTE LTE MiFi – Unlock MiFi for all devices</span>
                                <span class="cart__price ">£30.59</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="info__calculations ">
                        <div class="price__container ">

                            <div class="row ">
                                <span>Subtotal</span>
                                <span> £57.57</span>
                            </div>
                            <div class="row ">
                                <span>Shipping</span>
                                <span> free</span>
                            </div>
                            <div class="row ">
                                <span>Taxes</span>
                                <span> £3.00</span>
                            </div>

                            <div class="row row__total ">
                                <span>Total</span>
                                <span> £58.57</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>`
    }
    _scriptMarkup(){
        return `
        <script>
            let nextbtn = document.querySelectorAll('.btn-next');
            let sectionsheader = document.querySelectorAll('.sections__header li');
            nextbtn.forEach(nextbtn__each => {
                nextbtn__each.addEventListener('click', next);
            });

            function next(e) {
                e.preventDefault();
                let thispage = this.parentElement.parentElement.parentElement;
                thispage.classList.remove('active');
                thispage.nextElementSibling.classList.add('active');

                sectionsheader.forEach(sectionsheader__each => {

                    let sectionid = thispage.nextElementSibling.getAttribute('id');
                    let activelist = sectionsheader__each.getAttribute('data-preview');

                    if (sectionid == activelist) {
                        sectionsheader__each.classList.add('active');
                        sectionsheader__each.previousElementSibling.classList.remove('active');
                        console.log("Wroks");
                    }

                });

            }
        </script>
        `
    }

}

export default new View();