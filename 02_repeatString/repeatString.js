const repeatString = function(word, times) {
    let answer = '';
    for (let i  = 0; i < times; i++) {
        answer += word;
    }
    if (times < 0) {
        answer = 'ERROR';
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
