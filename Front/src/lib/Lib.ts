import axios from "axios"
import {Conf} from "./conf"
export class Lib {
    makeQuery(type:String,params:[]){
        if(type=="get"){
            return axios.get(Conf.prototype.url,
                {headers:{'Content-Type': 'text/json', 'Accept': 'application/json'}
            }).then(res=>{
               
                console.log("uid du carrier",res.data);
                return res.data
            }).catch(err=>{
            console.log(err)
            return err
            
            });
        }
    }

  
  }
  