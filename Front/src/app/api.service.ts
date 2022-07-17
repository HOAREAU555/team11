import { Injectable } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

import axios from 'axios';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  env = environment;
  UrlDomain = "http://ansible_team11_1:8084"//this.env.hostname;

  async getUser(token:string)
  {

    let config = {
      headers: {
        gfg_token_header_key: token,
      }
    };
    return axios.get(`http://ansible_team11_1:8084/user/profile`,config).then(res=>{
      return res;
    });
  }
  async getAllUser()
  {
    var token = localStorage.getItem("token")
    return axios.get(`http://ansible_team11_1:8084/user/all`,
    {headers:
      {'gfg_token_header_key': `${token}`}
    })
    .then(res=>{
      // handle success
      return res;
    })
  }
  GetToken()
  {
    return axios.post(`http://ansible_team11_1:8084/token/user/generateToken`)
    .then(res=>{
      // handle success
      return res.data;
    })
    .catch(error =>{
      console.log(error)
    })
  }
  TestToken(token1 : string)
  {
    const token = token1

    return axios.get(`http://ansible_team11_1:8084/token/user/validateToken`,
    {headers:
      {'gfg_token_header_key': `${token}`}
    })
    .then(res=>{
      // handle success
      return res;
    })
  }
  login(user : string,password:string)
  {
    
    return axios.post(`http://ansible_team11_1:8084/user/login`,
    
      {'email': `${user}`,
      'password': password
    }
    )
    .then(res=>{
      return res;
    }).catch(err=>{
      return err
    })
  }
  register(user : string,password:string,firstname,lastname)
  {
    return axios.post(`http://ansible_team11_1:8084/user/register`,
    
      {'email': `${user}`,
      'password': password,
      "firstname":firstname,
      "lastname":lastname
    }
    )
    .then(res=>{
      // handle succes
      return res;
    }).catch(err=>{
      return err
    })
  }
  UpdateUser(id : string,firstname,lastname)
  {
    
    var token = localStorage.getItem("token")

    return axios.put(`http://ansible_team11_1:8084/user/profile/update`,
    {
      'id': id,
      "firstname":firstname,
      "lastname":lastname
    },
    {
      headers:{'gfg_token_header_key': `${token}`}
    })
    .then(res=>{
      return res;
    }).catch(err=>{
      return err
    })
  }
  ChangePassword(password : string,id:string)
  {
    
    var token = localStorage.getItem("token")

    return axios.put(`http://ansible_team11_1:8084/user/changpass`,
    {
      'id': id,
      'password': password,
    },
    {
      headers:{'gfg_token_header_key': `${token}`}
    })
    .then(res=>{
      // handle succes
      return res;
    }).catch(err=>{
      return err
    })
  }

  GetCapteur(table : string, ordre : string)
  {
    var token = localStorage.getItem("token")

    return axios.get(`http://ansible_team11_1:8084/capteur/${table}/${ordre}`,
    {headers:
      {'gfg_token_header_key': `${token}`}
    })
    .then(res=>{
      // handle success
      return res;
    })
  }
}
