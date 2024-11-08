import { loadIcon } from '@iconify/react';

export async function preloadCommonIcons() {
  await Promise.all([
    loadIcon('mdi:theme-light-dark'),
    loadIcon('mdi:settings'),
    // Add other commonly used icons
  ]);
}
