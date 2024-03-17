import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RuleDto } from '../order/models/rule-dto';
import { ParamDto } from '../order/models/param-dto';

@Injectable({
  providedIn: 'root'
})
export class ParamService {

  constructor(private http : HttpClient) { }
  url='http://localhost:7080/api/v1/params'




  addParam (param:ParamDto){
    return this.http.post(this.url,param) 
   }

  getParams(){
    return this.http.get(this.url)
  
   }

   removeParam (paramId: any ){
    return this.http.delete(this.url+'/'+paramId)
  }



  editParam(param:ParamDto , paramId:any ){
    return this.http.put(this.url+'/'+paramId,param) 
   }


   getParamById(paramId:any){
    return this.http.get(this.url+'/'+paramId)
  }

}
