

function qeustion1() {
  const programmingKnowledge = document.getElementById('langKnowledge').value;
  let knowledge = 'none';
  if (programmingKnowledge === 77){
    knowledge = 'something'
  } else if (programmingKnowledge === 78){
    knowldge = 'something'
  } else if (programmingKnowledge === 79){
    knowldge = 'something'
  }
  return programmingKnowledge;
}

function question2() {
  const frontOrBack = parseInt(document.querySelector("input[name='frontOrBack']:checked").value);

  return frontOrBack
}


function question3() {
  const preferredSmell = parseInt(document.querySelector("input[name='smells']:checked").value);

  return preferredSmell
}