import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResourceUtil } from '../utils/resource.util';

export abstract class ResourceService<T> {
  constructor(
    public httpClient: HttpClient,
    private url: string,
    private endpoint: string
  ) { }

  public list(queryOptions?: object): Observable<Array<T>> {
    return this.httpClient
      .get<T>(`${this.url}/${this.endpoint}${ResourceUtil.toQueryString(queryOptions)}`)
      .pipe(
        map(data => ResourceUtil.convertList<T>(data))
      );
  }
  public find(queryOptions?: object): Observable<T> {
    return this.httpClient
      .get<T>(`${this.url}/${this.endpoint}${ResourceUtil.toQueryString(queryOptions)}`)
      .pipe(map(data => data[0]));
  }
  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, item)
      .pipe(map(data => data));
  }
  public read(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map(data => data));
  }
  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item['id']}`, item)
      .pipe(map(data => data));
  }
  public delete(item: T): Observable<T> {
    return (
      this.httpClient
        .delete<T>(`${this.url}/${this.endpoint}/${item['id']}`)
        .pipe(map(data => data))
    );
  }
}
