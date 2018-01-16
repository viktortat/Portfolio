import {Output, EventEmitter, Injectable} from "@angular/core";
import {Response, URLSearchParams} from "@angular/http";
import { HttpService }  from "../core/http.service";
import { ExtractService }  from "../core/extract.service";
import {Observable} from "rxjs/Observable";


import { Employee } from "../shared/models/employee";
import { Role } from "../shared/models/role";
import { Technology } from "../shared/models/technology";

import { Routes } from './../shared/helpers/routes';

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import { retry } from "rxjs/operator/retry";


@Injectable()
export class AdminService {

    routes:Routes;

    constructor(private http: HttpService, private extract:ExtractService) {
        this.routes=new Routes();
    }




    //GET requests
    getEmployees() : Observable<Employee[]> {
        
                 // ...using get request
                 return this.http.get(this.routes.getEmployees)
                                // ...and calling .json() on the response to return data
                                 .map(this.extract.extractData)
                                 //...errors if any
                                 .catch((error:any) => Observable.throw(this.extract.handleError(error)));
        
    }

    getRoles() : Observable<Role[]> {
        
                 // ...using get request
                 return this.http.get(this.routes.getRoles)
                                // ...and calling .json() on the response to return data
                                 .map(this.extract.extractData)
                                 //...errors if any
                                 .catch((error:any) => Observable.throw(this.extract.handleError(error)));
        
    }

    getTechnologies() : Observable<Technology[]> {
        
        // ...using get request
        return this.http.get(this.routes.getTechnologies)
                       // ...and calling .json() on the response to return data
                        .map(this.extract.extractData)
                        //...errors if any
                        .catch((error:any) => Observable.throw(this.extract.handleError(error)));

    }

    getConstants() : Observable<any> {
        return this.http.getConstants()
                        .map(this.extract.extractData)
                        .catch((error:any) => Observable.throw(this.extract.handleError(error)));
    }
}