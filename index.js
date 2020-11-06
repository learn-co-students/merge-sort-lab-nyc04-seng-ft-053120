function findMinAndRemoveSorted(arr){
    return arr.shift()
    }
    function merge(arr1,arr2){
        let sortedArr=[]
        while(arr1.length>0 && arr2.length>0){
                if(arr1[0]<arr2[0]){
                    sortedArr.push(findMinAndRemoveSorted(arr1))
                }else{
                    sortedArr.push(findMinAndRemoveSorted(arr2))
                }
            }
            return sortedArr.concat(arr1).concat(arr2)       
    }
    function mergeSort(arr){  
      let midpoint = arr.length/2
      let firstHalf = arr.slice(0,midpoint)
      let secondHalf = arr.slice(midpoint, arr.length)
      let sorted
      if(arr.length<2){
          return arr
      }else{
           sorted = merge(mergeSort(firstHalf),mergeSort(secondHalf))
      }
      return sorted
    }
