/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@client': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        css: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'lcov'],
            include: ['src/components/**/*.{js,jsx,ts,tsx}'],
            exclude: ['src/components/**/*.{types,stories,constants,test,spec}.{js,jsx,ts,tsx}'],
            // NOTE: coverage thresholds (80% lines/branches/functions/statements) were defined
            // in the old CRA jest.config.json but never actually enforced, because `test` ran
            // via `--watchAll` (which never exits/fails on thresholds). Current coverage is
            // ~48%. Re-enable `thresholds` here once coverage is raised - tracked as a
            // follow-up in docs/IMPROVEMENTS.md rather than silently gating CI on it now.
        },
    },
});
