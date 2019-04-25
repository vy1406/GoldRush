const renderer = new Renderer()

const board = new GoldRush()

$(document).keypress(function (e) {

    if (e.which == 119) {
        board.movePlayer(1, "up")
    }
    if (e.which == 97) {
        board.movePlayer(1, "left")
    }
    if (e.which == 100) {
        board.movePlayer(1, "right")
    }
    if (e.which == 115) {
        board.movePlayer(1, "down")
    }

    if (e.which == 105) {
        board.movePlayer(2, "up")
    }
    if (e.which == 106) {
        board.movePlayer(2, "left")
    }
    if (e.which == 108) {
        board.movePlayer(2, "right")
    }
    if (e.which == 107) {
        board.movePlayer(2, "down")
    }
    renderer.renderBoard(board)
    const scores = {
        player1_score: board.player1.getScore(),
        player2_score: board.player2.getScore()
    }
    renderer.renderScores(scores)
})

renderer.renderBoard(board)
const scores = {
    player1_score: board.player1.getScore(),
    player2_score: board.player2.getScore()
}
renderer.renderScores(scores)

