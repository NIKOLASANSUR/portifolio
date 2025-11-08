
function trocarTema() {
    const button = document.getElementById("switch");
    (localStorage.getItem("tema") == "claro")
        ? (
            document.documentElement.classList.remove("claro"),
            localStorage.setItem("tema", "escuro"),
            button.classList.remove("fa-sun"),
            button.classList.add("fa-moon")
        )
        : (
            document.documentElement.classList.add("claro"),
            localStorage.setItem("tema", "claro"),
            button.classList.remove("fa-moon"),
            button.classList.add("fa-sun")
        );
}