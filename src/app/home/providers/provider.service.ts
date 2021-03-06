import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../core/http.service';
import {ApiEndpoint} from '../shared/api-endpoint.model';
import {Provider} from './provider.model';

@Injectable()
export class ProviderService {

  constructor(private httpService: HttpService) {
  }

  readAll(): Observable<Provider[]> {
    return this.httpService.get(ApiEndpoint.PROVIDERS);
  }

  readAllActives(): Observable<Provider[]> {
    return this.httpService.get(ApiEndpoint.PROVIDERS + ApiEndpoint.ACTIVES);
  }

  read(id: string): Observable<Provider> {
    return this.httpService.get(ApiEndpoint.PROVIDERS + '\\' + id );
  }

  update(provider: Provider): Observable<Provider> {
    return this.httpService.put(ApiEndpoint.PROVIDERS + '\\' + provider.id, provider );
  }

  create(provider: Provider): Observable<Provider> {
    return this.httpService.post(ApiEndpoint.PROVIDERS, provider );
  }

  search(provider: Provider): Observable<Provider[]> {
    return this.httpService.post(ApiEndpoint.PROVIDERS + ApiEndpoint.SEARCH, provider);
  }
}
