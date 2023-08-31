import { main } from 'auction';

// List of parameters for testing
const testParams = ['Alice', 'Bob', 'Charlie'];

testParams.forEach(param => {
    const result = main(param);
    console.log(`Input: ${param}, Output: ${result}`);
});
