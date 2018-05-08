function theBeatlesPlay(musicians, instruments){
  var newarray = [];
  for (let i = 0; i < musicians.length; i++){
    newarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newarray;
}

function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length){
    facts[i] = "" + "!!!";
    i++;
  }
  return facts;
}