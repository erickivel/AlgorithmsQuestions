function sortedSquares(nums: number[]): number[] {
  let start = 0;
  let end = nums.length - 1;
  
  let result = Array(nums.length);
  
  for (let i = (nums.length-1); i >= 0; i--) {
      if (Math.abs(nums[start]) < Math.abs(nums[end])) {
          result[i] = nums[end]**2
          end--
      } else {
          result[i] = nums[start]**2
          start++
      }
  }
  
  return result;
};