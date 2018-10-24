import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../core/services/configuration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  title = 'home app';

  constructor(private configurationService: ConfigurationService) {
    console.log(configurationService.getEndpointConfiguration());
  }
}
