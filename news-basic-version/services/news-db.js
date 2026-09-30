// fetch('./services/news-db.json')
//     .then(response => response.json())
//     .then(data => {
//         ipJson = JSON.stringify(data.articles);
//         localStorage.setItem("article", ipJson);
//         lcArticles = JSON.parse(localStorage.getItem("article"));
//     });

    lcArticles = JSON.parse(localStorage.getItem("article"));

document.getElementById("show-all").addEventListener("click", function () {
    var table = document.getElementById("show-table");

    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table";

        console.log(lcArticles);
        let myTable = document.querySelector(`#show-table`);
        for (let ar of lcArticles) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${ar.title}</td>
            <td>${ar.content}</td>
            <td>${ar.status}</td>
            <td><img class="table-img" src="${ar.imagePath}" alt="image"></td>
            `;
            myTable.appendChild(tr);
        }
    }

    else {
        table.style.display = "none";
    }

});



