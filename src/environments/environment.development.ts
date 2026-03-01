import type { Environment } from './environment.interface';

/**
 * Development environment.
 * Used when building/serving with --configuration=development (via fileReplacements).
 */
export const environment: Environment = {
  production: false,
  formSpreeId: 'xwpepnda',
};
