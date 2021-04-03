const image = document.getElementById('image'); // The image we want to classify
const result = document.getElementById('result'); // The result tag in the HTML
const probability = document.getElementById('probability'); // The probability tag in the HTML
const progressBar = document.getElementById('progressBar');
const startBtn = document.getElementById('startBtn');


progressBar.style.display = 'none'
result.innerText = 'Result'
probability.innerText = 'Probability'
  

function start()
{
  progressBar.style.display = 'block'
  result.innerText = 'Loading ...'
  probability.innerText = 'Loading ...'
 
  ml5.imageClassifier('MobileNet')
  .then(classifier => classifier.classify(image))
  .then(results => {
    
    progressBar.style.display = 'none'   
    result.innerText ='Result: '+ results[0].label;
    probability.innerText ='Result: '+ results[0].confidence.toFixed(4);
  });

}

