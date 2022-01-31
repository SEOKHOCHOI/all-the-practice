function solution(A, B) {
  let answer = 0;
  let minNum, minIndex, maxNum, maxIndex;

  for (let i = A.length; i > 0; i--) {
    A.map((num, index) => {
      if (index === 0) {
        minNum = num;
        minIndex = index;
      }
      if (num < minNum) {
        minNum = num;
        minIndex = index;
      }
    });

    B.map((num, index) => {
      if (index === 0) {
        maxNum = num;
        maxIndex = index;
      }
      if (num > maxNum) {
        maxNum = num;
        maxIndex = index;
      }
    });

    answer += minNum * maxNum;
    A.splice(minIndex, 1);
    B.splice(maxIndex, 1);
  }
  return answer;
}
/*
다른 분의 풀이
function solution(A,B){
  let answer = 0;

  A.sort((a,b)=> a-b);
  B.sort((a,b)=> b-a);


for(let i=0; i<A.length; i++){
  answer = answer + A[i]*B[i];
}
  
    return answer;
}
*/