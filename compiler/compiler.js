const parse = require('../grammar.js').parse;
const commander = require('commander');
const fs = require('fs');
const codegen = require('./codegen.js');

module.exports = function(bobaScript) {
  try{
    commander.parse(process.argv);
    // const fileName = commander.args[0];
    //
    // console.log('Compiling: ' + fileName);

    // const source = fs.readFileSync(fileName, {encoding: 'utf-8'});
    const source = bobaScript;
    const ast = parse(source);
    console.log(JSON.stringify(ast, null, 4));

    console.log('\n==============\n');

    const js = codegen(ast);

    return {
      success: true,
      javascript: js
    };
  } catch (e) {
    return {
      success: false,
      error: e,
    }
  }
}
