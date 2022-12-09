import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private Http:HttpHeaders) { 
    console.log("funcionando")
  }

  ObtenerCancion(){
  const header = new HttpHeaders({
    "Authorization" :"Bearer BQDt2MjY5f5SvBSFv4wdnK9XFRe2hu4LDyv2XPfCulq8O1dv1h9Cpd4sb5zUyL9w2vQwAWYrYuOvdHlKfwyqGjAvzztDoFoQaFV1bjvL0BF3mumkcu8"
  })

    return this.Http.get("https://api.spotify.com/v1/browse/new-releases?country=CR&offset=0&limit=20",{header})
  }

}
