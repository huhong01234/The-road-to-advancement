let nums = [2,7,11,15], target = 9
var twoSum = function(nums, target) {
    
  const obj = {
    
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (obj[diff]!== undefined) {
        return [obj[diff], i];
    }
        obj[nums[i]] = i;
    
  }
};
    

console.log(twoSum(nums, target));
