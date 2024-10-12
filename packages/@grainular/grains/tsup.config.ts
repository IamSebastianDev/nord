/** @format */

import { defineConfig } from 'tsup';
const config = await import('importx').then((x) => x.import('@repository/config/tsup.ts', import.meta.url));
export default defineConfig(() => [
    {
        ...config.pkg,
        // Set all different entry points
        entry: {
            index: './src/index.ts',
            operators: './src/operators/index.ts',
        },
    },
    // Different config that merges the output to allow
    // for browser cdn packages to load all code at once
    {
        ...config.cdn,
        // Set the browser entry point. For the package cdn,
        // we use a special entry file that contains all exports
        entry: ['./src/browser.ts'],
        // Set the options for correct export
        globalName: 'grains',
    },
]);
