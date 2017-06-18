import { Fs } from './modules/Fs';
import { Os } from './modules/Os';
import { Json } from './modules/Json';

export class CoFounder {
    fs: Fs;
    os: Os;
    json: Json;

    constructor() {
        this.fs = new Fs();
        this.os = new Os();
        this.json = new Json(this.fs);
    }
}

export default CoFounder;
