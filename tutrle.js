let aquarium = document.getElementById("aquarium")


let tutrle = new RealTurtle.default(aquarium, {autoStart: true})

tutrle.setStrokeColorRGB(255,100,255)
tutrle.setFillStyle('brown')


tutrle.beginPath()

tutrle.forward(50)
tutrle.right(90)
tutrle.forward(40)
tutrle.right(90)
tutrle.forward(50)
tutrle.right(90)
tutrle.forward(40)
tutrle.right(90)
tutrle.forward(50)

tutrle.closePath()
tutrle.fill()

tutrle.beginPath()

tutrle.setFillStyle('black')



tutrle.right(45)
tutrle.forward(30)
tutrle.right(95)
tutrle.forward(30)


tutrle.closePath()
tutrle.fill()

tutrle.beginPath()
tutrle.setFillStyle('green')


tutrle.right(40)
tutrle.forward(50)
tutrle.right(90)
tutrle.forward(10)

tutrle.closePath()

tutrle.beginPath()

tutrle.right(90)
tutrle.forward(20)
tutrle.left(90)
tutrle.forward(10)
tutrle.left(90)
tutrle.forward(20)
tutrle.left(90)
tutrle.forward(10)


tutrle.closePath()
tutrle.fill()

tutrle.forward(10)
tutrle.left(90)
tutrle.forward(25)
tutrle.left(90)

tutrle.beginPath()
tutrle.setFillStyle('blue')


for(let i = 0; i<4; i++ ) {
    tutrle.forward(10)
    tutrle.right(90)
}
tutrle.closePath()
tutrle.fill()

tutrle.forward(20)

tutrle.beginPath()
tutrle.setFillStyle('blue')


for(let i = 0; i<4; i++ ) {
    tutrle.forward(10)
    tutrle.right(90)
}
tutrle.closePath()
tutrle.fill()

tutrle.forward(60)

tutrle.beginPath()
tutrle.setFillStyle('yellow')

tutrle.arc(20,360)

tutrle.closePath()
tutrle.fill()
