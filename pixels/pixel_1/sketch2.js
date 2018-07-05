// https://www.youtube.com/watch?v=nMUMZ5YRxHI
// 2D array overview https://www.youtube.com/watch?v=OTNpiLUSiB4

var video;
function setup(){
  createCanvas(500,500);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(500,500);

}


function draw(){
  background(51);
  loadPixels();
  video.loadPixels();
  for(var y = 0; y < height; y++){
    for(var x = 0; x < width; x++){
      var index = (x+y*width)*4
      pixels[index] =video.pixels[index];
      pixels[index + 1]= y;
      pixels[index + 2] =x;
      pixels[index + 3] =255;
    }
  }
  updatePixels();

}
