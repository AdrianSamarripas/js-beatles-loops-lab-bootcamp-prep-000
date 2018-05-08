function theBeatlesPlay(musicians, instruments){
  const newarray = [];
  for (let i = 0; i > musicians.length; i++){
    newarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newarray;
}