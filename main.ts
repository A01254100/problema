input.onButtonPressed(Button.A, function () {
    Suma = N1 + N2
    basic.showNumber(Suma)
    Palabra1 = "Sumaste"
})
input.onButtonPressed(Button.AB, function () {
    Multiplicación = N1 * N2
    basic.showNumber(Multiplicación)
    Palabra1 = "Multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    Resta = N1 - N2
    basic.showNumber(Resta)
    Palabra1 = "Restaste"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(N1)
    basic.showNumber(N2)
    basic.showString(Palabra1)
})
let Multiplicación = 0
let Resta = 0
let Suma = 0
let Palabra1 = ""
let N2 = 0
let N1 = 0
N1 = randint(1, 5)
N2 = randint(1, 5)
Palabra1 = "-"
Suma = 0
Resta = 0
Multiplicación = 0
