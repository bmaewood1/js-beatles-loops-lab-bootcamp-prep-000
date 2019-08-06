// add solution here

function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (var i=0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i]);
  }
  return empty;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}


function iLoveTheBeatles(num){
  var beatle = [];
  do {
    beatle.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return beatle;
}

