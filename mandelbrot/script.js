let xmininput = document.getElementById("xmin")
let xmaxinput = document.getElementById("xmax")
let ymininput = document.getElementById("ymin")
let ymaxinput = document.getElementById("ymax")



// Define the range of the Mandelbrot set
let xmin = -2.5;
let xmax = 1;
let ymin = -1.5;
let ymax = 1.5;

// Define the maximum number of iterations
const maxIterations = 50;

function setup() {
    // Create a p5.js canvas and append it to the canvas container
    const canvas = createCanvas(document.getElementById("canvasbox").clientWidth, document.getElementById("canvasbox").clientWidth);
    canvas.parent("canvasbox"); noLoop();
    background("#454545")

    pixelDensity(1);

    // Draw the Mandelbrot set
    drawMandelbrot();
}



function drawMandelbrot() {
    background("#454545")
    // Loop through each pixel on the canvas
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            // Map the pixel's position to the complex plane
            let a = map(x, 0, width, xmin, xmax);
            let b = map(y, 0, height, ymin, ymax);

            // Calculate the Mandelbrot value for the current complex number
            let n = mandelbrot(a, b);

            // Color the pixel based on the Mandelbrot value
            if (n === maxIterations) {
                stroke(223, 244, 33); // Set points in the Mandelbrot set to #DFF421 (bright yellow-green)
            } else {
                stroke("#454545"); // Everything else (outside the Mandelbrot set) is black
            }
            point(x, y);
        }
    }
}

function mandelbrot(a, b) {
    // Mandelbrot formula: Z = Z^2 + C
    let ca = a;
    let cb = b;
    let n = 0;

    for (n = 0; n < maxIterations; n++) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;

        // If the magnitude of Z becomes too large, the point is not in the Mandelbrot set
        if (a * a + b * b > 16) {
            break;
        }
    }

    return n;
}

function mouseClicked() {
    if (mouseButton === LEFT) {
        const x = map(mouseX, 0, width, xmin, xmax);
        const y = map(mouseY, 0, height, ymin, ymax);
        zoomIn(x, y, 2); // Zooming factor increased to zoom in
        drawMandelbrot(); // Update the canvas after zooming
    }
}

// Zooming In
function zoomIn(x, y, factor) {
    const width = xmax - xmin;
    const height = ymax - ymin;
    const newWidth = width / factor;
    const newHeight = height / factor;
    const dx = (width - newWidth) / 2;
    const dy = (height - newHeight) / 2;

    xmin = x - newWidth / 2;
    xmax = x + newWidth / 2;
    ymin = y - newHeight / 2;
    ymax = y + newHeight / 2;


    xmininput.value = xmin
    xmaxinput.value = xmax
    ymininput.value = ymin
    ymaxinput.value = ymax

}

