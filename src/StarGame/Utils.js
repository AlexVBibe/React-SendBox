
export const utils = {

    // function returns random number between min and max (edges included)
    random: (min, max) => min + Math.floor(max * Math.random()),

    // function returns collection of numbers in a range [min,max]
    range: (min, max) => Array.from({length: max - min + 1}, 
                                    (_, number) => min + number),
    
    // function returns a random range of max numbers
    randomRange: (max) => utils.range(1, utils.random(1, max)),

    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[utils.random(0, sums.length)];
    }
};