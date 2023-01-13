
function submitFunc(event) {
  event.preventDefault();

  question1();
  question2();
  question3();
  question4();
  question5();
  resultsFunc();
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
    } else if (frontOrBack === 3){
      frontBack = 3;
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
    } else if (preferredSmell === 3){
      smells = 3;
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
    } else if (interests === 4){
      interest = 4;
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
    } else if (preferreBreakfast === 4){
      food = 4;
    }
  return food;
}

function resultsFunc() {
  const formResults = question1() + question2()+ question3() + question4() + question5();


  console.log(formResults);
  return formResults;
}







window.addEventListener("load", function(){
  document.querySelector(".button").addEventListener("click", submitFunc);

});