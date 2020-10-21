
// function findMinAndRemoveSorted(arr) {
//     console.log(arr)
//     let minNum = arr[0]
//     let minIndex = 0

//     for(i =0; i < arr.length; i++) {
//         if (minNum > arr[i])
//         {
//             minNum = arr[i]
//             minIndex = i
//         }
//     }
//     arr.splice(minIndex, 1) //remove one element at the particular index
//     return minNum
// } 

// findMinAndRemoveSorted ([1,2,3,4])


function findMinAndRemoveSorted(array){
    return array.shift()
  }
  


  function merge(firstSubarray, secondSubArray){
    let sorted = []
    while(firstSubarray.length != 0 && secondSubArray.length != 0){
      if(firstSubarray[0] < secondSubArray[0]){
        sorted.push(findMinAndRemoveSorted(firstSubarray))
      } else {
        sorted.push(findMinAndRemoveSorted(secondSubArray))
      }
    }
    return sorted.concat(firstSubarray).concat(secondSubArray)
  }
  
  function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted;
  
    if(array.length < 2){
      return array
    } else {
      sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
  } 