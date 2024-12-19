{
    const getProperty = <T, K extends keyof T>(studentObj: T, id: K): T[K] => {
        return studentObj[id];
    }

    type Person = {
        name: string;
        id: number;
        age?: string;
    }
    const person1: Person = {
        name: "Shakib",
        id: 183107,

    }
    const result1 = getProperty(person1, "id");
    console.log(result1)

}