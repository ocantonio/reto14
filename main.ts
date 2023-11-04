function Nenemigo () {
    enemigo = game.createSprite(randint(0, 4), randint(0, 4))
}
input.onButtonPressed(Button.A, function () {
    Nave.change(LedSpriteProperty.X, direccion)
})
input.onButtonPressed(Button.AB, function () {
    if (direccion == 1) {
        direccion = -1
    } else {
        direccion = 1
    }
})
input.onButtonPressed(Button.B, function () {
    Nave.change(LedSpriteProperty.Y, direccion)
})
let enemigo: game.LedSprite = null
let direccion = 0
let Nave: game.LedSprite = null
Nave = game.createSprite(2, 2)
direccion = 1
Nenemigo()
loops.everyInterval(randint(1000, 4000), function () {
    enemigo.delete()
    Nenemigo()
})
basic.forever(function () {
    if (Nave.isTouching(enemigo)) {
        game.addScore(1)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        enemigo.delete()
        Nenemigo()
    }
})
