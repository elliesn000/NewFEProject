lcArticle = JSON.parse(localStorage.getItem("article"));
console.log(lcArticle);


document.addEventListener("DOMContentLoaded", function () {
    article = document.querySelector('#news-left-top');
    maxAr = lcArticle[lcArticle.length - 1];
    console.log("maxAr " + (lcArticle.length - 1));

    let div = document.createElement('div');
    div.innerHTML = `
            <img class="news-img" src="${maxAr.imagePath}">
            <p class="news-title">${maxAr.title}</p>
            <p class="news-info">${maxAr.content}</p>
            `;
    article.appendChild(div);
});

document.addEventListener("DOMContentLoaded", function () {
    article = document.querySelector('#news-left-bot');
    lbAr = lcArticle[lcArticle.length - 2];
    console.log("lbAr " + (lcArticle.length - 2));

    let div = document.createElement('div');
    div.innerHTML = `            
            <p class="news-title">${lbAr.title}</p>
            <p class="news-info">${lbAr.content}</p>
            `;
    article.appendChild(div);
});


document.addEventListener("DOMContentLoaded", function () {
    article = document.querySelector('#news-mid');
    mMaxAr = lcArticle.length - 3;
    console.log("mMaxAr " + mMaxAr);

    for (let i = mMaxAr; i > mMaxAr - 2; i--) {
        console.log("news-mid " + i);
        let div = document.createElement('div');
        div.innerHTML = `            
            <img class="news-small-img" src="${lcArticle[i].imagePath}">
            <p class="news-title news-title-smaller">${lcArticle[i].title}</p>
            <p class="news-info news-info-smaller">${lcArticle[i].content}</p>          
            `;
        article.appendChild(div);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    table = document.querySelector('#table-news');
    qtt = 0;
    tMaxAr = lcArticle.length - 5;
    console.log("tMaxAr " + tMaxAr)
    for (let i = tMaxAr; i > tMaxAr - 6; i--) {
        qtt++;
        console.log("table-news" + i);
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="table-qtt">${qtt}</td>
        <td class="table-text">${lcArticle[i].title}</td>        
        `;
        table.appendChild(tr);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    article = document.querySelector('#world-news');
    wMaxAr = lcArticle.length - 5;
    console.log("wMaxAr " + wMaxAr);

    for (let i = wMaxAr; i > wMaxAr - 4; i--) {
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="world-columns">
            <img class="news-small-img" src="${lcArticle[i].imagePath}">
            <p class="world-title">${lcArticle[i].title}</p>
            </div>
            `;
        article.appendChild(div);
    }
});



