import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

it('mounts', () => {
  cy.mount(HomeComponent, {
    providers: [provideRouter([])],
  });
});
