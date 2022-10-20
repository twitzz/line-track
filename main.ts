function car_backward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 35)
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 35)
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 35)
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 35)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 35)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 35)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 42)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 42)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 35)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 35)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 35)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 35)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 42)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 42)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 35)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 35)
}
basic.forever(function () {
    if (mecanumRobot.LineTracking(LT.Right) == 0 && mecanumRobot.LineTracking(LT.Left) == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        car_left()
    } else if (mecanumRobot.LineTracking(LT.Right) == 1 && mecanumRobot.LineTracking(LT.Left) == 0) {
        car_right()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (mecanumRobot.LineTracking(LT.Right) == 0 && mecanumRobot.LineTracking(LT.Left) == 0) {
        mecanumRobot.state(MotorState.stop)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        car_forward()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
