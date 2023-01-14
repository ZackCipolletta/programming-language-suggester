
function submitFunc(e) {
  e.preventDefault();

  question1();
  question2();
  question3();
  question4();
  question5();
  resultsFunc();
  clearFunc();
  printResults();
}

function question1() {
  const programmingKnowledge = parseInt(document.getElementById('langKnowledge').value);
  let knowledge = 'none';
    if (programmingKnowledge === 1){
      knowledge = 1;
    } else if (programmingKnowledge === 2){
      knowledge = 2;    
    } else if (programmingKnowledge === 3){
      knowledge = 3;    
    } else if (programmingKnowledge === 0){
      knowledge = 0;
    }
  return knowledge;
}

function question2() {
  const frontOrBack = parseInt(document.querySelector("input[name='frontOrBack']:checked").value);
  let frontBack = 'none';
    if (frontOrBack === 1){
      frontBack = 1;
    } else if (frontOrBack === 2){
      frontBack = 2;
    } else if (frontOrBack === 0){
      frontBack = 0;
    }
  return frontBack;
}

function question3() {
  const preferredSmell = parseInt(document.querySelector("input[name='smells']:checked").value);
  let smells= 'none';
    if (preferredSmell === 1){
      smells = 1;
    } else if (preferredSmell === 2){
      smells = 2;
    } else if (preferredSmell === 0){
      smells = 0;
    }
  return smells;
}

function question4() {
  const interests = parseInt(document.getElementById('genInterests').value);
  let interest = 'none';
    if (interests === 1){
      interest = 1;
    } else if (interests === 2){
      interest = 2;
    } else if (interests === 3){
      interest = 3; 
    } else if (interests === 0){
      interest = 0;
    }
  return interest;
}

function question5() {
  const preferreBreakfast = parseInt(document.querySelector("input[name='breakfast']:checked").value);
  let food = 'none';
    if (preferreBreakfast === 1){
      food = 1;
    } else if (preferreBreakfast === 2){
      food = 2;
    } else if (preferreBreakfast === 3){
      food = 3;
    } else if (preferreBreakfast === 0){
      food = 0;
    }
  return food;
}

function resultsFunc() {
  const formResults = question1() + question2()+ question3() + question4() + question5();
  const name = document.getElementById('user-name').value;
  let results = '';
      if (formResults >= 10){
        results = "C#"+document.getElementById('c-sharp').removeAttribute('class');
      } else if (formResults >= 6){
        results = "JavaScript"+document.getElementById('javaScript').removeAttribute('class');
      } else if (formResults >= 3){
        results = "Python"+document.getElementById('python').removeAttribute('class');    
      } else if (formResults <= 2){
        results = "HQ9+"+document.getElementById('HQ9+').removeAttribute('class');
      }
    if (name !== '') {
      results = name.charAt(0).toUpperCase() + name.slice(1) + ', it looks like you should learn ' + results.slice(0, -9) + '.';
    } else {
      results = 'You should learn ' + results.slice(0, -9) + '.';
    }


  return results;
}

function clearFunc(){
  return document.querySelectorAll('span').forEach(el=>el.classList.add('hidden'));
}

function printResults() {
  const resultsPrint = document.querySelector(".survey-results");
    resultsPrint.innerHTML = resultsFunc();
}





window.addEventListener("load", function(){
  document.querySelector(".button").addEventListener("click", submitFunc);
});