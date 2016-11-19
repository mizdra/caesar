#!/usr/bin/env node
'use strict';

const caesar = require('../lib/caesar.js');
const program = require('commander');

function range(val) {
    return val.split('..').map(Number);
}

program
    .version('0.0.1')
    .option('-i, --index', 'Print index')
    .option('-r, --range <first>..<last>', 'A range', range)
    .parse(process.argv);

program.range = program.range || [0, 0];
const str = program.args[0];
const [first, last] = program.range;

for (let i = first; i <= last; i++) {
    let output = caesar(str, i);

    // indexオプションが有効であればindexを出力する
    if (program.index) {
        output = `${i}\t: ${output}`;
    }

    console.log(output);
}
