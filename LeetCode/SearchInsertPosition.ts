function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  
  while (start <= end) {
      let middle = Math.floor((start+end)/2);
      
      if(nums[middle] === target) {
          return middle;
          
      } else if(nums[middle] > target) {
          if(nums[middle - 1] < target) {
              return middle;
          }
          
          end = middle - 1;
          
      } else {
          if(nums[middle + 1] > target) {
              return middle+1;
          }
          
          start = middle + 1;
      }
  }
  
  return start;
};