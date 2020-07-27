/* A construction company is building a new neighborhood, 
and they are currently working on the design. 
Each house will be built using one of three main materials 
(e.g., wood, brick, or concrete), but no side-by-side houses can be 
made of the same material. Because each house will be of varying size 
and complexity, the cost of the materials for each house varies. 
Given the cost of using each material for each house, what is the 
minimum cost needed to complete the neighborhood?

YOUR TASK

Write a function minCost which:

1. has a parameter cost:  a 2-dimensional array of integers where 
cost[i][j] denotes the cost of using the jth material on the ith house, and

2. returns minimumCost (an integer which is the minimum cost to 
build all the houses in the neighborhood)

*/



function minCost(costs) {
    if(costs==null||costs.length==0)
        return 0;
 
    for(let i=1; i<costs.length; i++){
        costs[i][0] += Math.min(costs[i-1][1], costs[i-1][2]);
        costs[i][1] += Math.min(costs[i-1][0], costs[i-1][2]);
        costs[i][2] += Math.min(costs[i-1][0], costs[i-1][1]);
    }
 
    let minCost = costs.length-1;
    return Math.min(Math.min(costs[minCost][0], costs[minCost][1]), costs[minCost][2]);
}

minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]) // 4
