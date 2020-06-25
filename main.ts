input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . . # . .
        . . . . .
        . # # # .
        `)
    for (let index = 0; index < 5; index++) {
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
    }
})
