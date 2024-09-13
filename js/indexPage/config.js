import { URL_API } from "../urls.js";

console.log(URL_API);
async function sliderFetch() {
    let res = await fetch(URL_API + "slider");
    let data = await res.json();

    data.map((slide) => {
        const el = document.createElement("slider-component");
        el.setAttribute("src", slide.img_uri);
        el.setAttribute("text", slide.title);
        el.setAttribute("href", slide.link);

        document.getElementById("carousel-inner").appendChild(el);
    });
}

// Header Articles
async function hArticlesFetch() {
    let res = await fetch(URL_API + "header-articles");
    let data = await res.json();

    data.map((articles) => {
        const el = document.createElement("harticle-component");
        el.setAttribute("src", articles.img_uri);
        el.setAttribute("text", articles.title);
        el.setAttribute("category", articles.category);
        el.setAttribute("href", articles.link);

        document.getElementById("header-articles").appendChild(el);
    });
}

// News Articles
async function newsArticlesFetch() {
    let res = await fetch(URL_API + "news");
    let data = await res.json();

    data.map((news) => {
        const el = document.createElement("news-component");

        el.setAttribute("src", news.img_uri);
        el.setAttribute("href", news.link);
        el.setAttribute("text", news.title);
        el.setAttribute("category", news.category);
        el.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mt-4");

        document.getElementById("news").appendChild(el);
    });
}

// most-read
async function mostReadFetch() {
    let res = await fetch(URL_API + "most-read");
    let data = await res.json();

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            const el = document.createElement("most-read-component");
            el.setAttribute("title", data[i].title);
            el.setAttribute("src", data[i].img_uri);
            el.setAttribute("href", data[i].link);
            el.setAttribute("exerpt", data[i].paragraph);
            el.setAttribute(
                "datetime",
                moment(parseInt(data[i].date)).format("dddd") +
                    "," +
                    moment(parseInt(data[i].date)).format("LL")
            );
            console.log(i);

            document.getElementById("card-news").appendChild(el);
        } else {
            const el = document.createElement("big-most-read");
            el.setAttribute("text", data[i].title);
            el.setAttribute("src", data[i].img_uri);
            el.setAttribute("href", data[i].link);
            el.setAttribute(
                "datetime",
                moment(parseInt(data[i].date)).format("dddd") +
                    "," +
                    moment(parseInt(data[i].date)).format("LL")
            );

            console.log(i);
            document.getElementById("card-news").appendChild(el);
        }
    }
}

// Opinions Articles
async function opinionsFetch() {
    let res = await fetch(URL_API + "opinion-articles");
    let data = await res.json();

    data.map((opinion) => {
        const el = document.createElement("opinions-articles");

        el.setAttribute("src", opinion.user_uri);
        el.setAttribute("href", opinion.link);
        el.setAttribute("title", opinion.title);
        el.setAttribute("userName", opinion.user_name);
        el.classList.add("col-lg-3", "col-md-4", "col-sm-6");

        document.getElementById("opinions").appendChild(el);
    });
}

// Videos Component
async function videosFetch() {
    let res = await fetch(URL_API + "videos");
    let data = await res.json();

    data.map((vids) => {
        const el = document.createElement("videos-component");

        el.setAttribute("src", vids.img_uri);
        el.setAttribute("href", vids.link);
        el.setAttribute("title", vids.title);
        el.classList.add("swiper-slide");

        document.getElementById("wrapper").appendChild(el);
    });
}

// Latest news component

async function latestNewsFetch() {
    try {
        let res = await fetch(URL_API + "latest-news");
        let data = await res.json();

        data.forEach((latest) => {
            if (latest.position === "right") {
                const el = document.createElement("latest-news-component");
                el.setAttribute("src", latest.img_uri);
                el.setAttribute("href", latest.link);
                el.setAttribute("title", latest.title);
                el.setAttribute("category", latest.category);
                el.setAttribute("paragraph", latest.paragraph);

                document.getElementById("first-article").appendChild(el);
            } else if (latest.position === "side") {
                const el = document.createElement("side-news-component");
                el.setAttribute("src", latest.img_uri);
                el.setAttribute("href", latest.link);
                el.setAttribute("title", latest.title);
                el.setAttribute("category", latest.category);

                document.getElementById("side-article").appendChild(el);
            } else if (latest.position === "bottom") {
                const el = document.createElement('bottom-news-component');
                el.setAttribute("src", latest.img_uri);
                el.setAttribute("href", latest.link);
                el.setAttribute("title", latest.title);
                el.setAttribute("category", latest.category);
                el.classList.add('col-sm-6')

                document.getElementById('bottom-article').appendChild(el);
            }
        });
    } catch (error) {
        console.error("Failed to fetch latest news:", error);
    }
}

// Function calling

sliderFetch();

hArticlesFetch();

newsArticlesFetch();

mostReadFetch();

opinionsFetch();

videosFetch();

latestNewsFetch();
