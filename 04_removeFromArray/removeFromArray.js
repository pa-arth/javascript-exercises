const removeFromArray = function(arrayz, ...remove) {
    for (let item of remove) {
        for (let i = 0; i < arrayz.length; ++i) {
            if (arrayz[i] === item) arrayz.splice(i,1);
        }
    }
    return arrayz;
};

// Do not edit below this line
module.exports = removeFromArray;
