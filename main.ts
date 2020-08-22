input.onButtonPressed(Button.A, function () {
    kepernyo_szabad = false
    basic.showNumber(input.temperature())
    basic.showString("°C")
    kepernyo_szabad = true
})
let fenyerosseg = 0
let kepernyo_szabad = false
kepernyo_szabad = true
basic.forever(function () {
    if (kepernyo_szabad == true) {
        fenyerosseg = input.lightLevel()
        if (input.lightLevel() < 64) {
            basic.showIcon(IconNames.SmallDiamond)
        } else if (input.lightLevel() < 128) {
            basic.showIcon(IconNames.Diamond)
        } else if (input.lightLevel() < 196) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        basic.pause(1000)
    }
})
