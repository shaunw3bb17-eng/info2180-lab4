document.addEventListener("DOMContentLoaded", function() {
    
    const searchButton = document.getElementById("search");
    const searchInput = document.getElementById("search-input");
    const result = document.getElementById("result");


    searchButton.addEventListener("click", function(){

        const query = searchInput.value;
        fetch("superheroes.php?query=" + encodeURIComponent(query)).then(response => response.text()).then(data => {
            result.innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});