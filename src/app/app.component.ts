import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AllFeaturesModule } from './features/all-features.module';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, SharedModule, AllFeaturesModule,LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone : true
})
export class AppComponent {
  title = 'ng-test';
}
