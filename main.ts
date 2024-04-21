let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
        serial.writeLine("" + (degrees))
    } else if (degrees < 135) {
        basic.showString("E")
        serial.writeLine("" + (degrees))
    } else if (degrees < 225) {
        basic.showString("S")
        serial.writeLine("" + (degrees))
    } else if (degrees < 315) {
        basic.showString("W")
        serial.writeLine("Degree")
        serial.writeLine("" + (degrees))
    } else {
        basic.showString("N")
        serial.writeLine("" + (degrees))
    }
})
