import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CountriesResponse
} from "../../interfaces/master-data.interface";

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  // url = `${environment.apiBaseURL}/globalData`;
  url = `/globalData`;

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<CountriesResponse> {
    return this.http.get<CountriesResponse>(`${this.url}/countries`);
  }
}

