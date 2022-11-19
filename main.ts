input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
    game.resume()
})
input.onButtonPressed(Button.AB, function () {
    Ammor = game.createSprite(Player.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 3; index++) {
        Ammor.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (Ammor.get(LedSpriteProperty.Y) == 0) {
        Ammor.delete()
    }
    if (Ammor.isTouching(_1)) {
        Ammor.delete()
        _1.delete()
        game.addScore(1)
        _1 = game.createSprite(randint(0, 4), 0)
    }
    if (Ammor.isTouching(_2)) {
        Ammor.delete()
        _2.delete()
        game.addScore(1)
        _2 = game.createSprite(randint(0, 4), 0)
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
    game.resume()
})
let Ammor: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
_1 = game.createSprite(randint(0, 4), 0)
_2 = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (_1.get(LedSpriteProperty.Y) == 4 || _2.get(LedSpriteProperty.Y) == 4) {
        _1.delete()
        _2.delete()
        game.addScore(1)
        _1 = game.createSprite(randint(0, 4), 0)
        _2 = game.createSprite(randint(0, 4), 0)
    } else {
        _1.change(LedSpriteProperty.Y, 1)
        _2.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (_1.isTouching(Player) || _2.isTouching(Player)) {
        game.pause()
        game.gameOver()
    }
})
