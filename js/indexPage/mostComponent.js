const most = `
                <div class="card-news">
                    <a href="">
                        <div class="row">
                            <div class="col-md-5">
                                <img src="" class="w-100" alt="...">
                            </div>
                            <div class="col-md-7">
                                <div class="card-text">
                                    <h4>
                                        
                                    </h4>
                                    <p>
                                        
                                    </p>
                                    <time datetime="">
                                        
                                    </time>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                        `;

class mostRead extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = most;
        this.querySelector('h4').innerText = this.getAttribute('title');
        this.querySelector('p').innerText = this.getAttribute('exerpt');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('time').innerHTML = this.getAttribute('datetime');
        this.querySelector('time').setAttribute('datetime', this.getAttribute('date'));

    }
}

window.customElements.define("most-read-component", mostRead);