const ftoc = function(temp) {
  let ans; 
  ans = (temp -32 )* 5/9;
  
  ans = Math.round(ans * 10) / 10;
  return ans;
};

const ctof = function(temp) {
  let ans; 
  ans = (temp) * 9/5 + 32;
  ans = Math.round(ans * 10) / 10;
  return ans;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
