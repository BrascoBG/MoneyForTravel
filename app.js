function peshoMoney([arg1,arg2,arg3]){
  bitcoin = parseInt(arg1*1168);
  ioanBgn = parseFloat((arg2*0.15) * 1.76);
  togetherEur = (bitcoin + ioanBgn) / 1.95;
  commission = parseFloat(arg3) / 100;
  result  = togetherEur - commission * togetherEur;
  console.log(result);
}

peshoMoney([1,5,5]);
