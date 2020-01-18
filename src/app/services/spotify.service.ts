import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getNewReleases() {
    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQBEBXPU_swc_3btns4HAVCPcejDGSkNIEc9zMCRqqvoKptmeO6Jv3t01ppdrN8PX_DgilUPEb12o7K5_Pw',
    });
    const urlSpotify = 'https://api.spotify.com/v1/browse/new-releases?limit=20';
    return this.http.get(urlSpotify , {headers});
  }

  getArtist( term: string) {
    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQBEBXPU_swc_3btns4HAVCPcejDGSkNIEc9zMCRqqvoKptmeO6Jv3t01ppdrN8PX_DgilUPEb12o7K5_Pw',
    });
    const urlSpotifySearch = `https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`;
    return this.http.get(urlSpotifySearch , {headers});
  }
}
