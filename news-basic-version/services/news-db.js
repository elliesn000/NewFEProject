fetch('./services/news-db.json')
.then(response => response.json())
.then(data => {
    ipJson = JSON.stringify(data.articles);
    localStorage.setItem("article", ipJson);

    lcJson = localStorage.getItem("article")
    lcArticles = JSON.parse(lcJson);
    console.log(lcArticles[0])
})

