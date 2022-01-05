import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AnnonceService{
  private host:string = "http://localhost:8080";
  private jwtToken: any;
  private roles: Array<any> = [];
  constructor(private http: HttpClient) {}

  loadToken(){
    this.jwtToken = localStorage.getItem('token');
  }

  getAnnonce(){
    if (this.jwtToken == null)
      this.loadToken()
    return this.http.get(this.host + "/Allannonce", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getAnnonceById(){
    if (this.jwtToken == null)
      this.loadToken()
    return this.http.get(this.host + "/Allannonce", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
