const opinionsComponent = `
                            <a href="">
                                        <div class="opinion-card">
                                            <h5></h5>
                                            <div class="user-info">
                                                <img src="" alt="user">
                                                <span></span>
                                            </div>
                                        </div>
                            </a>
                            `;

class opinions extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = opinionsComponent;
        this.querySelector('h5').innerText = this.getAttribute('title');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('span').innerText = this.getAttribute('userName');

    }
}

window.customElements.define("opinions-articles", opinions);