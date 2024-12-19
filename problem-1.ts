{
    const sumArray = (numbers: number[]): number => {
        let sum = 0;
        numbers.map(num => {
            console.log('num=', num)
            sum += num
            console.log('Sum=', sum)
        });
        // console.log(numbers)
        return sum;
    };

    const result = sumArray([1, 2, 3, 4, 5])
    // console.log(result);
    // Done
}