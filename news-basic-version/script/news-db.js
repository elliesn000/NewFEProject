window.addEventListener("load", funtion()){
    const res = await fetch('./news-db.json');
    const data = await res.json();
    const ipJSON = JSON.stringify(data);

    localStorage.setItem("importJSON", ipJSON);

    let article = localStorage.getItem("importJSON");
    let obj = JSON.parse();
    document.getElementById("view-draft").innerHTML = "obj.articles";
}


