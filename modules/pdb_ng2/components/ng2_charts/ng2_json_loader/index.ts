import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Ng2JsonLoader {
    constructor(@Inject(Http) private http: Http) { }

    load(id) {
        var jsonPath = drupalSettings.pdb.configuration[id].jsonPath;
        console.log(jsonPath);
        var httpRes = this.http.get(jsonPath);
        console.log(httpRes);
        return httpRes;
    }

    getLabels(json) {
        var labels:string[] = [];

        for (let a of json) {
            if (!labels.includes(a.hair_color)) {
                labels.push(a.hair_color);
            }
        }
        return labels;
    }

    getData(json, labels) {
        var counts = {};

        for (let a of json) {
            let c = a.hair_color;
            if (c in counts) {
                counts[c]++;
            }
            else {
                counts[c] = 1;
            }
        }

        var data:number[] = [];
        for (let l of labels) {
            data.push(counts[l]);
        }

        return data;
    }
}
