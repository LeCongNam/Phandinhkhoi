import { HttpClient } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class ProductServices extends BaseService{
   
    constructor(private inject:Injector){
        super(inject)
    }

    getProduct(params:any){
        return this.get('/api2/home',params)
    }

    addProject(body:any){
        return this.post('/api2/create',body)
    }


    updateProject(id:any,body:any){
        return this.patch('/api2/update/'+id,body)
    }
   

    deleteProject(params:any){
       return this.delete('/api2/delete/'+params)
    }
}