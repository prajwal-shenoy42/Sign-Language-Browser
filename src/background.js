import * as tf from "@tensorflow/tfjs";
const net = await tf.loadGraphModel(
    "https://tensorflowjsgesture.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
  );

  let model, webcam, ctx, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const size = 200;
    const flip = true; 
    webcam = new tmPose.Webcam(size, size, flip); 
    await webcam.setup(); 
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
}

async function loop(timestamp) {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}