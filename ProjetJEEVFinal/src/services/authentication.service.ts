import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthenticationService{
  private host:string = "http://localhost:8080";
  private jwtToken: any;
  private roles: Array<any> = [];
  constructor(private http:HttpClient) {
  }
  //http ==> un service qui est injecté
  login(user: any){
    return this.http.post(this.host + "/login", user, {observe: 'response'});
   }

   saveToken(jwt: any){
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
   }

   //loader le token
  loadToken(){
    this.jwtToken = localStorage.getItem('token');
  }
  getTasks(){
    //il faut envoyer le token avec chaque requéte:
    if(this.jwtToken == null)
      this.loadToken();
     return this.http.get(this.host + "/tasks", {headers: new HttpHeaders( {'Authorization': this.jwtToken})});
   }
  getAnnonce(){
    if (this.jwtToken == null)
      this.loadToken()
    return this.http.get(this.host + "/Allannonce", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  logout(){
    this.jwtToken = null;
    localStorage.removeItem('token');
   }
   //Vérifier le role d'utilisateur :
  isAdmin(){
    for (let r of this.roles){
      if(r.authority == "ADMIN") return true;
    }
    return false;
  }
}
