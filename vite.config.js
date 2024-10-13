import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import sass from 'sass';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [
        react(),
        eslint({
            include: ['src/**/*.js', 'src/**/*.jsx'],
            exclude: ['node_modules/**', 'dist/**'],
        }),
    ],
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
        modules: {
            generateScopedName: '[local]__[hash:base64:8]',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
});
