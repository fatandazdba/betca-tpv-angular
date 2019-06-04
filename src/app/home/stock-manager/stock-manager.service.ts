import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable, of} from 'rxjs';
import {ArticleDetailModel} from '../shared/article-detail-model';
import {ApiEndpoint} from '../shared/api-endpoint.model';

@Injectable()
export class StockManagerService {
  constructor(private httpService: HttpService) {
  }

  getArticlesMinimum(limit): Observable<ArticleDetailModel[]> {
    console.log('servicio:');
    const result = this.httpService.get(ApiEndpoint.ARTICLES_MINIMUM + '/' + limit);
    console.log('total ' + result);
    console.log('result :' + result.forEach(element => {
      console.log('elem ' + element);
    })
    );
    return result;
  }

  getArticleDateSold(dateSold): Observable<ArticleDetailModel[]> {
    console.log('servicio:');
    const result = this.httpService.get(ApiEndpoint.ARTICLES_DATE_SOLD + '/' + dateSold);
    return result;
  }

  getArticlesReservation(): Observable<ArticleDetailModel[]> {
    console.log('servicio:');
    const result = this.httpService.get(ApiEndpoint.ARTICLES_RESERVATION);
    console.log('total ' + result);
    console.log('result :' + result.forEach(element => {
      console.log('elem ' + element);
    })
    );
    return result;
  }
}
