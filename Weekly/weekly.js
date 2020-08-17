
function minCost(cost){
    let max = 100
    let arr = [];
    for (let i = 0; i < cost.length; i++){
        for(let j = 0; j < cost[i].length; j++){
            if(cost[i][j] < max && arr[i-1] !== cost[i][j]){
                arr[i] = cost[i][j];
                max = cost[i][j];
            }
        }
           max = 100
    }
      const reduced = arr.reduce((total,number) => total + number);
     return minCost
}

minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]);