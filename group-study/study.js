 
function findMax(nums) {
  var max = nums[0];

  for (var i = 0; i < nums.length; i++) {

    if (nums[i] > max) {
      max = nums[i];
    }

  }
  return max;

}

var m = findMax([5,6,36,45]);
console.log(m);












