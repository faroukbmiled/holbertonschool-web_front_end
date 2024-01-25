function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
    return count;
  }

  const startTime = performance.now();
  console.log(countPrimeNumbers());
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
