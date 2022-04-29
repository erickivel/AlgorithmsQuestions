/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
  const len = nums.length;
  
  k = k > len ? k % len : k
  let right = k;
  let left = 0;
  
  let numMiddle = len-right;
  let numStart = 0
  const copy = nums.map(e => e);
  
  while (left < k || right < len) {
      let nStart = nums[numMiddle];
      let nMid = nums[numStart]
      
      if (left < k) {
          nums[left] = copy[numMiddle];
          numMiddle++;
          left++
      }
      
      if (right < len) {
          nums[right] = copy[numStart];
          numStart++
          right++
      }
  }
};