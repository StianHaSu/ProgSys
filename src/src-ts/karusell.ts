export default{
}
class karusell{  
    bilder: string[] = ['"baalTur.png"', "Sims.png"];

    counter: number = 0;

    public count(): number {
        if (this.counter == 1) {
            this.counter = 0;
            return this.counter;
        }

        this.counter++;
        return this.counter;
    }

    public newPicture(): string {
        this.delay(4000);
        this.count();
        return this.bilder[this.counter];
    }

    public delay(milliseconds : number) {
        return new Promise(resolve => setTimeout( resolve, milliseconds));
    }
}
