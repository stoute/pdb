import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Ng2JsonLoader {
    constructor(@Inject(Http) private http: Http) { }

    load(id) {
        var jsonPath = drupalSettings.pdb.configuration[id].jsonPath;
        return this.http.get(jsonPath);
    }

    getLabels(json, field) {
        var labels:string[] = [];

        for (let a of json) {
            if (!labels.includes(a[field])) {
                labels.push(a[field]);
            }
        }
        return labels;
    }

    getData(json, labels, field) {
        var counts = {};

        for (let a of json) {
            let c = a[field];
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
