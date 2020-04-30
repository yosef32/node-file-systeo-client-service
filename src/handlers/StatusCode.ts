export default class StatusCode {
    
    private codes: Map<number, number>  = new Map();
    
    constructor() {
        this.codes.set(0, 200); // ok
        this.codes.set(1, 504);
        this.codes.set(2, 400);
        this.codes.set(3, 400);
        this.codes.set(4, 504);
        this.codes.set(5, 400);
        this.codes.set(6, 400);
        this.codes.set(7, 401);
        this.codes.set(11, 400);
    }

    getHttpStatusCode(rpcStatusCode: number): number {
        let code: number | undefined= this.codes.get(rpcStatusCode)
        if(!code) {
            return 504
        }
        return code;
    }
}