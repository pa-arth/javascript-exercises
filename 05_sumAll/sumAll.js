const sumAll = function(int1, int2) {
    let ans = 0;
    if (typeof int1 == "number" && typeof int2 ==  "number" && int1 >= 0 && int2 >= 0) {
        for (let i = Math.min(int1, int2); i <= Math.max (int1, int2); i++) {
            ans += i;
        }
    }
    else {
        ans = 'ERROR'
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
