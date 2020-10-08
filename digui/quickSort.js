let arr = [2,3,5,8,7,9,6,4,1,2,5]

const quickSort = (arr, start, end) => {
  let flag = arr[start]
  let s = start
  let e = end

  while(e>s){
    while(arr[e]>=flag&&e>s){
      e--
    }
    while(arr[s]<=flag&&e>s){
      s++
    }
    if(e!=s){
      [arr[e],arr[s]] = [arr[s],arr[e]]
    }
  }
  [arr[start],arr[s]]=[arr[s],arr[start]]
  return s
}

const mySort = (arr,start,end) => {
  if(start<end){
    let i = quickSort(arr,start,end)
    mySort(arr,start,i-1)
    mySort(arr,i+1,end)
  }
  return arr
}
console.log(mySort(arr,0,arr.length-1))