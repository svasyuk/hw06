document.addEventListener("DOMContentLoaded", function () {
    const jokesUrl = "https://official-joke-api.appspot.com/random_ten";
    const jokeList = document.querySelector(".joke__list");
    
    function clearJokes() {
        jokeList.childNodes.forEach(element => {
            jokeList.remove()
        }); 
    }

    function createJoke(text, isError = 0) {
        const jokeLI = document.createElement("li");

        jokeLI.classList.add("joke__item");
        if (isError == 1) {
            jokeLI.classList.add("joke__error");
        }
        jokeLI.innerHTML = text
        jokeList.appendChild(jokeLI);
    }

    console.log("render");
    
    
    fetch(jokesUrl)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        clearJokes();
        data.forEach(element => {
            const jokeText = element.setup.concat('. ', element.punchline);
            console.log(jokeText)
            createJoke(jokeText)
        });
    })
    .catch((error) => {
        console.log("error:", error)
        createJoke("error:".concat(error), 1)
    });
    
}
)