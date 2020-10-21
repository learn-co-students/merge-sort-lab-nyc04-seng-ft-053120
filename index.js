
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
    let sorted = []  //create empty array that will store the sorted items
    while(firstSubarray.length != 0 && secondSubArray.length != 0){ // so if array lenghth is not equal to 0
      if(firstSubarray[0] < secondSubArray[0]){ // if first element from first arr is less then first element in second arr
        sorted.push(findMinAndRemoveSorted(firstSubarray)) //push that itmem to the sort array and remove it with previous function
        //this could alwo just be removed with this array.
      } else {
        sorted.push(findMinAndRemoveSorted(secondSubArray)) // vice versa if it is second arr element is less then or equal
      }
    }
    return sorted.concat(firstSubarray).concat(secondSubArray) //once loop has run return sorted array concated ith last itme left.
  }
  
  function mergeSort(array){
    let midpoint = array.length/2 // divide array in 2 to figure out what midpoint num is 
    let firstHalf = array.slice(0, midpoint) //first array is 0 - midpoint this allows us to not have to know how long or short array is
    let secondHalf = array.slice(midpoint, array.length) //midpoint to the total length is the second array
    let sorted;
  
    if(array.length < 2){
      return array 
    } else {
      sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf)) // sorted will send both first half and second half of array to previous function
    }
    return sorted
  } 