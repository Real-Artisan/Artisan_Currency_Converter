import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiKey = 'xLsaOyQfaosIdWgopday7wUnXeHCU8RV';
headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'apiKey': `${this.apiKey}`,

});

  constructor(private http: HttpClient) {}
  public convert(base: string, compare: string, amount:string) {
    return this.http.get('https://api.apilayer.com/currency_data/convert?to='+compare+'&from='+base+'&amount='+amount+'',{headers: this.headers});
  }
}
