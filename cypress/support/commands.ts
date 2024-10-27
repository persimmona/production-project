import * as commonCommands from 'cypress/support/commands/common';
import * as profileCommands from 'cypress/support/commands/profile';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
