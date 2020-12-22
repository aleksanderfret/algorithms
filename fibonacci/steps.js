const steps = (num) => {
  if (num <=3) {
    return num;
  }  
  const val = [1,2,3];
  for(let i = 4; i<= num; i++){
    	val[i-1] = val[i-3] + val[i-2];
  }
  return val[num-1];
}

const stepsR = (num) => {
  if (num <=3) {
    return num;
  }  
  return stepsR(num-2) + stepsR(num-1);
}

console.log(steps(2));
console.log(stepsR(2));