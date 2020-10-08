// 汉诺塔问题
// 将n-1的盘子放到buffer,最后一个移入目标
// 然后buffer和from换，继续将n-1个移入buffer，剩下最后一个移入目标，依次递归
let A = [2, 1, 0],
    B = [],
    C = []
var hanota = function(A, B, C) {
  const move = (n, form, buffer, to) => {
      if(n==1){
          to.push(form.pop())
          return
      }
      move(n-1,form,to,buffer)
      to.push(form.pop())
      move(n-1,buffer,form,to)
      return to
  }
  return move(A.length,A,B,C)
};
console.log(hanota(A,B,C))