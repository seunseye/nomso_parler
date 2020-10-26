function linearSearch(arr,value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function linearSearchRecursive(arr,value) {
    let len = arr.length - 1;
    if(arr.length < 1) {
        return -1;
    }else if(arr[len] === value) {
        return len;
    }
    return linearSearchRecursive(arr.slice(0,arr.length - 1),value);
}

function binarySearch(arr,value) {
    let sortArr = arr.sort((a,b)=>a-b);
    let start = 0, end = sortArr.length-1;
    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if(sortArr[mid] === value) {
            return mid;
        }else if (value > sortArr[mid]) {
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }
    return -1;
}

function binarySearchRecursive(arr,value,st,end=arr.length-1) {
    let sortArr = arr.sort((a,b)=>a-b);
    let start = st || 0;
    if(start <= end) {
        let midPoint = Math.floor((start+end)/2);
         if(value === sortArr[midPoint]) {
            return midPoint;
    }else if(sortArr[midPoint] > value) {
       return binarySearchRecursive(sortArr,value,start,midPoint-1);
    }else {
     return binarySearchRecursive(sortArr,value,midPoint+1,end);
    }
}
    return -1;
}