const newsArticle = `
                        <a href="" class="article-link">
                            <img src="" alt="...">
                            <div class="article-text mt-3">
                                <span class="article-category">
                                </span>
                                <h5 class="article-title">
                                </h5>
                                <p>
                                </p>
                            </div>
                        </a>
                    `;

class NewsArticle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = newsArticle;
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

window.customElements.define("news-component", NewsArticle);
