const args = process.argv.slice(2);

const timer = function(args) { 
  if (args.length > 0) {
    for (const argument of args) {
      if (!isNaN(argument) && Number(argument) > 0){
        delay = Number(argument)
        setTimeout(() => {
        process.stdout.write('.');
        },delay * 1000)
      }
    }
  }
  else {
    return
  }
}

timer(args)
