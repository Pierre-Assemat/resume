import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile';

/**
 * Service to fetch and update profile data.
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  protected profile: Profile;

  constructor(protected http: HttpClient) {}

  getProfile(name): Observable<Profile> {
    return this.http.get<Profile>(`./assets/${name}.json`);
  }
}
