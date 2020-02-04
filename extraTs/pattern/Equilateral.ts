function equilateral(b: number): void {
    if (b > 2 && b < 11) {
        for (let i: number = 1; i <= b; i++) {
            let s: string = "";
            for (let j: number = 1; j <= b - i; j++) {
                s = s + " ";
            }
            for (let k: number = 0; k < 2 * i - 1; k++) {
                if (k % 2 == 0)
                    s = s + "*";
                else
                    s = s + " ";
            }
            console.log(s);
        }
    }
    else {
        console.log(" wrong choice ");
    }
}
export default equilateral;