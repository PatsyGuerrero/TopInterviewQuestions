
/*
By Patricia Juane

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]

class MoveZeroes {

  public static int[] moveZeroes(int[] arr) {
    // traverse Arrsay
    int numOfZeroes = 0;
    int k = 0;

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
        // [0,1,0,3,12]
        numOfZeroes++; // 2
      } else { // [1,3,12]
        arr[k] = arr[i]; //
        k++;
      }
    }

    for (int j = 0; j < numOfZeroes; j++) { // [1,3,12,0,0]
      arr[k++] = 0;
    }

    return arr;
  }

  public static void main(String[] args) {

    int[] nums = { 0, 1, 0, 3, 12 };
    int[] result = moveZeroes(nums);
    for (int i = 0; i < result.length; i++) {
      System.out.println(result[i]);
    }

    int[] nums2 = { 0 };
    int[] result2 = moveZeroes(nums2);
    for (int i = 0; i < result2.length; i++) {
      System.out.println(result2[i]);
    }
  }

}
