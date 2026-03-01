import type { Environment } from './environment.interface';

/**
 * Default (production) environment.
 * Replaced by environment.development.ts when building/serving with development configuration.
 */
export const environment: Environment = {
  production: true,
  formSpreeId: 'xwpepnda',
};
