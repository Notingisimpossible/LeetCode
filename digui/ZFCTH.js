let a = "12d212kjuhgfd12kn12112lk"
let b = "1"
let c = "8"

const replaceAlpha = (a,b,c) => {
  let len = b.length
  let cLen = c.length
  let start = 0
  let end = len
  let flag
  let mid
  while(end<a.length){
    flag = a.substring(start,end)
    if(flag==b){
      mid = a.substring(0,start) + c + a.substring(end,a.length)
      a = mid
      start = end + cLen-len
      end = start + len
    }else{
      start = start+1
      end = end+1
    }
  }
  return a
}

console.log(replaceAlpha(a,b,c))