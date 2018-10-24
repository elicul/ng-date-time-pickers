import { Injectable } from '@angular/core';
import { EndpointConfiguration } from '../../models/endpoint.configuration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConfigurationService {
    protected endpointConfiguration: EndpointConfiguration;
    constructor(private http: HttpClient) { }

    loadEndpointConfiguration(): Observable<EndpointConfiguration> {
      return this.http.get<EndpointConfiguration>(environment.endpointConfigFile)
        .pipe(
          tap(response => {
            this.endpointConfiguration = response;
          })
        );
    }

    getEndpointConfiguration(): EndpointConfiguration {
        return this.endpointConfiguration;
    }
}
