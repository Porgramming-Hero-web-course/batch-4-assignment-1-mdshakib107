{
    interface IProfile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (Profile: IProfile, Partial: Partial<IProfile>): IProfile => {
        return { ...Profile, ...Partial };
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

}