function minCost(costs) {
    if(costs==null||costs.length==0)
        return 0;
 
    for(let i=1; i<costs.length; i++){
        costs[i][0] += Math.min(costs[i-1][1], costs[i-1][2]);
        costs[i][1] += Math.min(costs[i-1][0], costs[i-1][2]);
        costs[i][2] += Math.min(costs[i-1][0], costs[i-1][1]);
    }
 
    let m = costs.length-1;
    return Math.min(Math.min(costs[m][0], costs[m][1]), costs[m][2]);
}

minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]) // 4
