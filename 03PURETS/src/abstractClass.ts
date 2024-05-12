abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void
    getReelTime(): number {
        // some complex calculation
        return 8;
    }
}


class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia");
    }


}

let hc = new Instagram("test", "Test", 3)
console.log(hc.getReelTime());