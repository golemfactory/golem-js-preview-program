import { program } from "commander";

const gauss = (function(a, b, ) {
    var executed = false;
    var output = []
    return function(a, b) {
        if (!executed) {
            executed = true;
            output = gauss_pair(a, b);
            return output[0];
        } else {
            executed = false;
            return output[1];

        }
    };
})();

function histogram(data, numerOfBins=10, minValue, maxValue) {
// https://stackoverflow.com/questions/36266895/simple-histogram-algorithm-in-javascript
    let min = Infinity;
    let max = -Infinity;

    
    if (!minValue && !maxValue) {
        for (const item of data) {
            if (item < min) min = item;
            if (item > max) max = item;
        }
    } else {
        min = minValue;
        max = maxValue;
    }


    const binVolume = (max - min +0.1) / numerOfBins;

    const histogram = new Array(numerOfBins).fill(0);

    for (const item of data) {
        histogram[Math.floor((item - min) / binVolume)]++;
    }

    return histogram;
}

function gauss_pair(mean = 0, stddev = 1) {

    const U1 = Math.random();
    const U2 = Math.random();

    const fi =  2.0 * Math.PI * U1;
    const R = Math.sqrt(-2.0 * Math.log(U2))

    const X = R * Math.cos(fi);
    const Y = R * Math.sin(fi);

    const sX = X * stddev + mean;
    const sY = Y * stddev + mean;

    return [sX, sY];
}



async function main(args) {

    let table = [];
    
    for (var i=0; i< args.sample; i++) {

        table.push(gauss(args.mean, args.stddev));   
   
    }

    console.log(histogram(table, 100)) ;

}    

program
 .option("--sample <number_of_samples>", "number of samples", (value) => parseInt(value), 10)
 .option("--mean <mean_value>", "mean value", (value) => parseFloat(value), 0.0)
 .option("--stddev <stadev_value>", "stddev value", (value) => parseFloat(value), 1.0);

program.parse();

const options = program.opts();

main(options).catch((e) => console.error(e));










