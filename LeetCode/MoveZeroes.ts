/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {    
    let zeros = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            zeros++
            i--
        }
    }

    for (let j = 0; j < zeros; j++) {
        nums.push(0);
    }    
};