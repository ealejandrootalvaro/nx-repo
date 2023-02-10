import type { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig } from '@playwright/test';

import { baseConfig } from '../../playwright.config.base';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  updateSnapshots: 'missing'
};

export default defineConfig(config);
