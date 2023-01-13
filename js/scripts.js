

function question1() {
  const programmingKnowledge = parseInt(document.getElementById('langKnowledge').value);
  let knowledge = 'none';
    if (programmingKnowledge === 1){
      knowledge = 'something1'
    } else if (programmingKnowledge === 2){
      knowledge = 'something2'
    } else if (programmingKnowledge === 3){
      knowledge = 'something3'
    }
  return knowledge;
}

function question2() {
  const frontOrBack = parseInt(document.querySelector("input[name='frontOrBack']:checked").value);
  let frontBack = 'none';
    if (frontOrBack === 1){
      frontBack = 'something1'
    } else if (frontOrBack === 2){
      frontBack = 'something2'
    } else if (frontOrBack === 3){
      frontBack = 'something3'
    }
  return frontBack;
}

function question3() {
  const preferredSmell = parseInt(document.querySelector("input[name='smells']:checked").value);
  let smells= 'none';
    if (preferredSmell === 1){
      smells = 'smells1'
    } else if (preferredSmell === 2){
      smells = 'smells2'
    } else if (preferredSmell === 3){
      smells = 'smells3'
    }
  return smells;
}

function question4() {
  const interests = parseInt(document.getElementById('genInterests').value);
  let interest = 'none';
    if (interests === 1){
      interest = 'something'
    } else if (interests === 2){
      interest = 'something 2'
    } else if (interests === 3){
      interest = 'something 3'  
    } else if (interests === 3){
      interest = 'something 4'
    }
  return interest;
}