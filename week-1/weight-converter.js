const args = process.argv.slice(2);

if(args.length === 0){
       console.error("stderr: Usage: node weight-converter.js <pounds>");
    process.exit(1);
}

const pounds = Number.parseFloat(args[0])

if(Number.isNaN(pounds)){
    console.error("stderr: Input must be a number.");
    process.exit(1); 
}

const kilograms = pounds * 0.453592;

console.log(kilograms.toFixed(2));