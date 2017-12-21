import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Connection } from '../Connection/connection';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ConnectionService {
  connection: Connection;

  constructor(private http: Http) { }

  public getConnections(to: String): Observable<Connection>  {
   const from = 'Rotkreuz';
   const query: string = API_URL + 'from=' + from + '&to=' + to + '&limit=1';

   return this.http
     .get(query)
     .map(this.extractData)
     .catch(this.handleError);
  }


  private handleError (error: Response | any) {
    console.error('ConnectionService::handleError', error);
    return Observable.throw(error);
  }

  private extractData(response: Response | any) {
    this.connection  = new Connection();
    const body = response.json();
    this.connection.departure = body.connections[0].from.departure;
    this.connection.platform = body.connections[0].from.platform;
    console.log(body);
    console.log(this.connection);
    return this.connection;

  }

}
/*response => {
  const connections = response.json();
  return connections.map((connection => new Connection(connection)));*/
