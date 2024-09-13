const bigMostRead = `
                <div class="card-news">
                    <a href="">
                        <div class="card-img">
                            <img src="" alt="...">
                        </div>
                        <div class="card-text">
                            <h4>
                            </h4>
                            <time datetime="18-12-2024">
                                
                            </time>
                        </div>
                    </a>
                </div>
`;


class BigMostRead extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = bigMostRead;
        this.querySelector('h4').innerText = this.getAttribute('text');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('time').innerHTML = this.getAttribute('datetime');
        this.querySelector('time').setAttribute('datetime', this.getAttribute('date'));
    }
}

window.customElements.define('big-most-read', BigMostRead);