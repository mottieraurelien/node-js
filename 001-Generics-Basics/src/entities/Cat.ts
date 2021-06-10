export default class Cat {

    name: string;
    nickname: string;

    constructor(name: string, nickname: string) {
        this.name = name;
        this.nickname = nickname;
    }

    public makeNoise() {
        console.log("meoooooooooowwwwww");
    }

}