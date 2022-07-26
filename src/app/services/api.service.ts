import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {
   }
   
   private getData(url: string, disableErrorCodeCheck: boolean = false) { 
    //url = this.addParameters(url);
    // var lang = this.translate.currentLang ;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept-Language', 'es');
    var p = new Promise<any>((resolve, reject) => {
      this.http.get(url, {
        headers: headers
      })
        .subscribe((data: any) => {
          //console.log("GET:" + url);
          //console.log("GET Response:", data);
          if (disableErrorCodeCheck) {
            resolve(data);
          } else {
            //TODO
            //this.ResolveResult(url, data, resolve, reject);
            resolve(data);
          }
        }, err => {
          if(err.status == 401){
            // this.auth.logout();
            this.http.get(url).subscribe((data: any) => { resolve(data); });
          }else{
            console.error(err);
            //this.events.publish('ERROR', 'Error de conexión', Date.now());
            reject(err);
          }
        });
    });
    return p;
  }
  private postData(url: string, body: any, disableErrorCodeCheck: boolean = false) { 
    //url = this.addParameters(url);
    var p = new Promise<any>((resolve, reject) => {
      this.http.post(url, body)
        .subscribe(data => {
          //console.log("GET:" + url);
          //console.log("GET Response:", data);
          if (disableErrorCodeCheck) {
            resolve(data);
          } else {
            //TODO
            //this.ResolveResult(url, data, resolve, reject);
            resolve(data);
          }
        }, err => {
          console.error(err);
          //this.events.publish('ERROR', 'Error de conexión', Date.now());
          reject(err);
        });
    });
    return p;
  }

   public GetAll() {
    let Url= environment.ApiRoot + '/pokemon?limit=1000&offset=0';
    return this.getData(Url);
   }

   public GetPokemonById(id: number) {
    let Url= environment.ApiRoot + '/pokemon/' + id;
    return this.getData(Url);
   }

   public GetItemById(id: number) {
    let Url= environment.ApiRoot + '/item/' + id;
    return this.getData(Url);
   }

   public GetPokemonByName(name: string)  {
    let Url= environment.ApiRoot + '/pokemon/' + name;
    return this.getData(Url);
   }

   public GetItemByName(name: string)  {
    let Url= environment.ApiRoot + '/item/' + name;
    return this.getData(Url);
   }



  //  public getPokemons(index: number){
  //   return this.http.get<any>(`${environment.ApiRoot}/pokemon/${index}`);
  // }

  //  public GetAll(index: number) {
  //   let Url= environment.ApiRoot + '/pokemon/${index}';
  //   return this.http.get<any>(Url + `/pokemon/${index}`);
  //  }
}
