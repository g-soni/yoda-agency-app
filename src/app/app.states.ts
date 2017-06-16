import { AppComponent } from './app.component';
import { AgencyComponent } from './agency/agency.component';
import { Transition } from '@uirouter/core';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  name: 'app',
  redirectTo: 'agency',
  component: AppComponent,
};

export const agencyState = {
  parent: 'app',
  name: 'agency',
  url: '/',
  component: AgencyComponent,
};

export const APP_STATES = [
  appState,
  agencyState,
];
