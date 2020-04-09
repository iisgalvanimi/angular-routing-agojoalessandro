
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    const headers = new HttpHeaders({Authorization: environment.oauthToken});


    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA-qP4GniE6QqH5FnsINpHyg6zx29VzsN8rTqQijPoAsIyYu5FbVv6A0ygpfuuUzSM_6gkLoWgpNengBR0m2HK5FFJuT2LWQs3KVSh47S7rHMwoGRWkfv9MurznlDmU-uULSM_RUPFfq_cdm4y8wquks-rVDm4DFtU '
    });

    return this.http.get(url, { headers });
  }

}

