let linelengthinput = document.getElementById("linelength")
let rotatdeginput = document.getElementById("degrees")
let linewidthinput = document.getElementById("linewidthinput")
let branchingfactorinput = document.getElementById("branchingfactorinput")



linelengthinput.addEventListener("change", (e) => {
    len = e.target.value
})

rotatdeginput.addEventListener("change", (e) => {
    rotatedeg = e.target.value
})


linewidthinput.addEventListener("change", (e) => {
    linewidth = e.target.value
})

branchingfactorinput.addEventListener("change", (e) => {
    branchingfactor = e.target.value
})


let len = 200
let linewidth = 1
let rotatedeg = 30
let branchingfactor = 0.5


function setup() {

    angleMode(DEGREES);


    // Create a p5.js canvas and append it to the canvas container
    const canvas = createCanvas(document.getElementById("canvasbox").clientWidth, document.getElementById("canvasbox").clientWidth);
    canvas.parent("canvasbox");


}

function draw() {
    background("#454545");
    strokeWeight(linewidth);
    stroke("#DFF421")

    translate(width / 2, height)
    branch(len)
}

function branch(len) {
    line(0, 0, 0, - len)
    translate(0, - len)
    if (len > 4) {
        push()
        rotate(rotatedeg)

        branch(len * branchingfactor)
        pop()

        push()
        rotate(-rotatedeg)
        branch(len * branchingfactor)
        pop()

    }


}