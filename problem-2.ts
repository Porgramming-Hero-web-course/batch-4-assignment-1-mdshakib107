{
    function removeDuplicates(numbers: number[]): number[] {

        return numbers.filter((num, index) => numbers.indexOf(num) === index);

        // console.log("Num=", num);
        // console.log("Index=", index);
        // const indexOf = numbers.indexOf(num)
        // console.log("IndexOfNum=", indexOf);



    }

    // Sample Input:
    const Result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log('ResultArray=', Result);
}
