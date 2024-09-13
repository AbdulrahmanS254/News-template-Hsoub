const vidsComponent = `
                                <a href="" class="article-link">
                                    <div class="slide-img">
                                        <img src="" alt="...">
                                        <i class="fa-solid fa-play"></i>
                                    </div>
                                    <div class="slide-text">
                                        <h5 class="article-title">
                                            
                                        </h5>
                                    </div>
                                </a>
                            `;

class Vids extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = vidsComponent;
        this.querySelector('h5').innerText = this.getAttribute('title');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));

    }
}

window.customElements.define("videos-component", Vids);