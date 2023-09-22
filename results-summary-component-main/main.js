function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => populateHTML(data))
        .catch(error => console.error('Error fetching data:', error));
}

function populateHTML(data) {
    var i = 1;
    data.forEach(element => {
        var iconElement = document.getElementById('icon' + i);
        var categoryElement = document.getElementById('category' + i);
        var scoreElement = document.getElementById('score' + i);

        scoreElement.textContent = element.score;
        categoryElement.textContent = element.category;
        iconElement.src = element.icon;
        i++;
    });
}

fetchData();
