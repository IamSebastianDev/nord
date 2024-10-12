/** @format */

/**
 * Common config properties for the per bundle
 * tsup config
 */
export const pkg = {
    // Clean output directory
    clean: true,
    // Generate dts & source map files
    dts: true,
    sourcemap: true,
    // Platform of choice is browser
    platform: 'browser' as const,
    // We want to generate different kind of outputs
    // for a browser environment
    // - modern esm
    // - compatible cjs
    format: ['cjs' as const, 'esm' as const],
};

export const cdn = {
    ...pkg,
    // The output directory is always `browser`,
    // the output file is always called browser.min.js
    outDir: './dist/browser',
    outExtension: () => ({ js: `.min.js` }),
    // We always want to optimize the generated browser bundle
    // as such it will always be minified and a IIFE
    format: 'iife' as const,
    platform: 'browser' as const,
    splitting: false,
    minify: true,
};
