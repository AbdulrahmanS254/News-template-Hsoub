async function sliderFetch() {
    let res = await fetch('http://127.0.0.1:4010/news');
    let data = await res.json();

    console.log(data);
}

sliderFetch();