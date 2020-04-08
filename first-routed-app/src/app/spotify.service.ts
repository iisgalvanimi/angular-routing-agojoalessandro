
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCFTrVKis_l3PO-53nLj_ivjowiWOxHwPVJf-PGuSkqUeurTblAOJEt0wh5TmCg7QkUKvOPwBObWb306OUfQa3ADI-GJa6AG3hWWxD582V6_TuOr085rmM6b2OzMnxoFnND_JKmgmG4frPR-XZPqVSZKTztLOmh6UI'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
