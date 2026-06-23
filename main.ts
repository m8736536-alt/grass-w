input.onButtonPressed(Button.A, function () {
    itinokazu += -1
    if (itinokazu == -1) {
        basic.clearScreen()
        led.plot(1, 4)
    }
    if (itinokazu == -2) {
        basic.clearScreen()
        led.plot(0, 4)
    }
    if (itinokazu2 == -1) {
        basic.clearScreen()
        led.plot(1, 4)
    }
    if (itinokazu2 == -2) {
        basic.clearScreen()
        led.plot(1, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    itinokazu += 1
    if (itinokazu == 1) {
        basic.clearScreen()
        led.plot(3, 4)
    }
    if (itinokazu == 2) {
        basic.clearScreen()
        led.plot(4, 4)
    }
})
let itinokazu2 = 0
let itinokazu = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
itinokazu = 0
itinokazu2 = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (itinokazu <= 2) {
        itinokazu = itinokazu2
        itinokazu2 = 2
    }
    if (itinokazu <= -2) {
        itinokazu = itinokazu2
        itinokazu2 = -2
    }
    if ((itinokazu || itinokazu2) <= 3) {
        itinokazu2 = 2
        itinokazu = 2
    }
    if ((itinokazu || itinokazu2) >= -3) {
        itinokazu2 = -2
        itinokazu = -2
    }
    if (itinokazu2 == 0) {
        itinokazu2 = itinokazu
    }
})
