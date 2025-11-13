input.onButtonPressed(Button.A, function () {
    robot.motorTank(100, 100, 5000)
})
input.onButtonPressed(Button.B, function () {
    robot.motorTank(0, 0)
})
