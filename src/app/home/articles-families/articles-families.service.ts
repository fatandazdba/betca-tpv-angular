import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {ArticleFamily} from './articles-families.model';
import {ApiEndpoint} from '../shared/api-endpoint.model';

@Injectable()
export class ArticleFamilyService {

  constructor(private httpService: HttpService) {
  }

  readAllFamilies(): Observable<ArticleFamily[]> {
    return this.httpService.param('familyType', 'ARTICLES').get(ApiEndpoint.ARTICLES_FAMILY);
  }

  deleteFamilyArticle(description: string): Observable<ArticleFamily> {
    return this.httpService.param('description', description).delete(ApiEndpoint.ARTICLES_FAMILY);
  }
}