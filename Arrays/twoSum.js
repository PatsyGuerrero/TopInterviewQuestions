// https://leetcode.com/problems/two-sum/description
// Time complexity O(n)
// Memory complexity O(n)
//Esta solución funciona mejor porque no se debe recorrer dos arrays y no ocupa tanto espacio en la memoria
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let aux = {};

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i], aux[nums[i]])
        if (aux[nums[i]] !== undefined) {
            return [i, aux[nums[i]]];
        }

        let dif = target - nums[i];
        aux[dif] = i;

        console.log(aux[dif], 'aux[dif]')
    }

    return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3,3], 6));

