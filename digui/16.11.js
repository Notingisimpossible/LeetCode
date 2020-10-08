// 自己写的笨方法
var divingBoard = function(shorter, longer, k) {
  if(k<=0){
      return []
  }
  if(shorter == longer){
      return [shorter*k]
  }
  let result = []
  let n = k
  let sum = 0
  while(n>=0){
      sum = shorter*n + longer*(k-n)
      result.push(sum)
      n--
  }
  return result
};

// 利用差值
var divingBoard = function(shorter, longer, k) {
  if(k<=0){
      return []
  }
  if(shorter == longer){
      return [shorter*k]
  }
  let result = new Array(k+1).fill(k.shorter)
  let c = longer-shorter
  result.map((item,i)=>{
    result[i] = item + i*c
  })
  return result
};