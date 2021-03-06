import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  urlBase: string = "";

  constructor(private router: Router, private http: Http, @Inject("BASE_URL") baseUrl: string) {
    this.urlBase = baseUrl;
  }

  public DeleteUserType(idUserType) {
    return this.http.get(`${this.urlBase}api/UserTypes/DeleteUserType/${idUserType}`)
      .map(res => res.json());
  }

  public getUser() {
    return this.http.get(`${this.urlBase}api/Users/ListUser`)
      .map(res => res.json());
  }

  public getUserById(idUser) {
    return this.http.get(`${this.urlBase}api/Users/getUser/${idUser}`)
      .map(res => res.json());
  }

  public getUserType() {
    return this.http.get(`${this.urlBase}api/Users/ListUserType`)
      .map(res => res.json());
  }

  public getSessionValues(next) {
    return this.http.get(`${this.urlBase}api/Users/getSessionValues`).map(res => {
        var data = res.json();
        if (data.value == '') {
          this.router.navigate(['/login-error']);
          return false;
        }
        else {
          var page = next["url"][0].path;
          if (data.lista != null) {
            var pages = data.lista.map(page => page.accion);

            if (pages.indexOf(page) > -1 && (page != 'login' && page != 'Login')) {
              return true;
            } else {
              this.router.navigate(['login-error-permissions']);
              return false;
            }
          }

          return true;
        }
      });
  }

  public getSession() {
    return this.http.get(`${this.urlBase}api/Users/getSessionValues`)
      .map(res => {
        return res.json().value == '' ? false : true;
      });
  }

  public getFilterUserByUserType(idUserType) {
    return this.http.get(`${this.urlBase}api/Users/FilterUserByUserType/${idUserType}`)
      .map(res => res.json());
  }

  public listPages() {
    return this.http.get(`${this.urlBase}api/Users/ListPages`)
      .map(res => res.json());
  }

  public ListPagesRecover(idUserType) {
    return this.http.get(`${this.urlBase}api/UserTypes/ListPagesRecover/${idUserType}`)
      .map(res => res.json());
  }

  public ListUserTypePages() {
    return this.http.get(`${this.urlBase}api/UserTypes/ListUserTypePages`)
      .map(res => res.json());
  }

  public listUserTypes() {
    return this.http.get(`${this.urlBase}api/UserTypes/ListUserType`)
      .map(res => res.json());
  }

  public login(userCLS) {
    return this.http.post(`${this.urlBase}api/Users/login`, userCLS)
      .map(res => res.json());
  }

  public logout() {
    return this.http.get(`${this.urlBase}api/Users/Logout`).map(res => res.json());
  }

  public saveData(userCLS) {
    return this.http.post(`${this.urlBase}api/Users/saveData`, userCLS)
      .map(res => res.json());
  }

  public saveDataUserType(userTypeCLS) {
    return this.http.post(`${this.urlBase}api/UserTypes/SaveData`, userTypeCLS)
      .map(res => res.json());
  }

  public validateUserExsts(idUser, name) {
    return this.http.get(`${this.urlBase}api/Users/validateUserExsts/${idUser}/${name}`)
      .map(res => res.json());
  }
}
