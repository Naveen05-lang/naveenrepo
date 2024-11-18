const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let count=0;
  let primeArray=[];
  let bag="";
  for(let i=0;i<numbers.length;i++){
    
     for(let j=1;j<=numbers[i];j++){
      if(numbers[i]%j==0){
        count++;
      }
     }
     if(count==2){
      primeArray.push(numbers[i]);
     bag+=numbers[i]+" ";
     }
      count=0;
  }
  console.log(bag);
  for(let m=0;m<primeArray.length;m++) {
  for(let k=0;k<primeArray.length;k++){
    if(primeArray[k]>primeArray[k+1]){
      let temp=primeArray[k];
      primeArray[k]=primeArray[k+1];
      primeArray[k+1]=temp;
    }
  }
}
  console.log(primeArray[0],primeArray[primeArray.length-1]);
  let sum=0;
  for(let l=0;l<primeArray.length;l++){
    sum=sum+primeArray[l];
  }
  console.log(sum);