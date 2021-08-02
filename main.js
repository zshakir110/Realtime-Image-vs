function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  }
  
  function modelLoaded()
  {
    console.log('Model Loaded!');
  }