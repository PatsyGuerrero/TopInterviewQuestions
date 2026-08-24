// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12]

// Output: [1,3,12,0,0]

// Input: nums = [0]

// Output: [0]

// Aunque tu solución puede corregirse, no es la solución más eficiente para este ejercicio.

// splice() implica mover elementos del array, por lo que hacerlo muchas veces puede terminar teniendo una complejidad O(n²).

// Este ejercicio está pensado para resolverse en O(n) usando un índice para indicar dónde colocar el siguiente número distinto de cero.

 // for (let i = 0; i < nums.length; i++) {
    //    if(nums[i] ==0){
    //       let elemento = nums.splice(i, 1)[0];
    //       nums.push(elemento)
    //    }
    // }

var moveZeroes = function(nums) {

    let numOfZeroes = 0;
    let k = 0;

    for (i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        // [0,1,0,3,12]
        numOfZeroes++; // 2
      } else { // [1,3,12]
        nums[k] = nums[i]; //
        k++;
      }
    }

    for (j = 0; j < numOfZeroes; j++) { // [1,3,12,0,0]
      nums[k++] = 0;
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
