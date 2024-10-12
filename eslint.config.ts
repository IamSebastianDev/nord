/** @format */
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.ts'],
    ignores: ['node_modules/**', 'dist/**', '**/*.spec.ts', '**/*.d.ts'],
});
