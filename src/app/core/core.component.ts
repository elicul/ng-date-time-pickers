import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {
  constructor(private configurationService: ConfigurationService) {
  }

  ngOnInit(): void {
    this.configurationService.loadEndpointConfiguration()
      .subscribe();
  }
}
