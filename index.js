function theBeatlesPlay(musicians, instruments){
  var newarray = [];
  for (let i = 0; i > musicians.length; i++){
    newarray.push(`${musicians} plays ${instruments}`);
  }
  return newarray;
}