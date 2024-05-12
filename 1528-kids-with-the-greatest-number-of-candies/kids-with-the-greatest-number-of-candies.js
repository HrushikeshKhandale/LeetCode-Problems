/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

        let arr=[];
        for(let i=0;i<candies.length;i++){
           arr.push(candies[i]+extraCandies>=Math.max(...candies));
        }

        

    return arr;
    
};