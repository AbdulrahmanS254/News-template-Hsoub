const article = `<a href="" class="article-link">
                                <div class="row">
                                    <div class="col-5">
                                        <img src="" alt="photo">
                                    </div>
                                    <div class="col-7">
                                        <div class="article-text">
                                            <span class="article-category">
                                                
                                            </span>
                                            <h5 class="article-title">
                                                
                                            </h5>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </a>`;

class hArticle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = article;
        this.querySelector('h5').innerText = this.getAttribute('text');
        this.querySelector('.article-category').innerText = this.getAttribute('category');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));

        if(this.getAttribute('except')) {
            this.querySelector('p').innerText = this.getAttribute('except');
        } else {
            this.querySelector('p').style.display = 'none';
        }
    }
}

window.customElements.define("harticle-component", hArticle);