////////////////////  right main article  /////////////////////
const latest = `
                        <a href="" class="article-link">
                            <img src="" alt="...">
                            <div class="card-text mt-3">
                                <span class="article-category">
                                    
                                </span>
                                <h5 class="article-title">
                                    
                                </h5>
                                <p>
                                    
                                </p>
                            </div>
                        </a>
                        `;

class latestNews extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = latest;
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("h5").innerText = this.getAttribute("title");
        this.querySelector("span").innerText = this.getAttribute("category");
        this.querySelector("p").innerText = this.getAttribute("paragraph");
    }
}

window.customElements.define("latest-news-component", latestNews);
////////////////////  Side article  /////////////////////
const latestSide = `
                        <a href="" class="article-link">
                            <div class="row">
                                <div class="col-sm-6">
                                    <img src="" class="" alt="photo">
                                </div>
                                <div class="col-sm-6">
                                    <div class="article-text">
                                        <span class="article-category">
                                        </span>
                                        <h5 class="article-title">
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `;

class sideNews extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = latestSide;
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("h5").innerText = this.getAttribute("title");
        this.querySelector("span").innerText = this.getAttribute("category");
    }
}

window.customElements.define("side-news-component", sideNews);

////////////////////  Bottom article  /////////////////////

const latestBottom = `
            <a href="" class="article-link">
                                    <img src="" alt="...">
                                    <div class="article-text mt-3">
                                        <span class="article-category">

                                        </span>
                                        <h5 class="article-title">

                                        </h5>
                                    </div>
                                </a>
            `;


class bottomNews extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = latestBottom;
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("h5").innerText = this.getAttribute("title");
        this.querySelector("span").innerText = this.getAttribute("category");
    }
}

window.customElements.define('bottom-news-component', bottomNews);