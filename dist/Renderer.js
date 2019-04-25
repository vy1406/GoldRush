class Renderer {
    renderBoard = function (posts) {
        $("#board").empty();

        const source = $("#board-render-script").html()
        const template = Handlebars.compile(source)
        let newHTML = template(posts)

        $("#board").append(newHTML)
    }

    renderScores = function (scores) {
        $("#scores").empty();

        const source = $("#scores-render-script").html()
        const template = Handlebars.compile(source)
        let newHTML = template(scores)

        $("#scores").append(newHTML)
    }
}

