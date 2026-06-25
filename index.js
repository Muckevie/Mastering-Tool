#!/usr/bin/env node

function main() {
  console.log('Mastering Tool is ready.');
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
};
