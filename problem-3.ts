{
    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLowerCase().split(" ");
        const targetWord = word.toLowerCase();
        return words.filter(splitWord => splitWord === targetWord).length;
    }


    console.log(countWordOccurrences("I love typescript.Love to code", "Love"));


}