import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import sass from 'sass';
import { resolve } from 'path';

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
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/pages/About/About.jsx'),
                property: resolve(__dirname, 'src/pages/Property/Property.jsx'),
                error: resolve(__dirname, 'src/pages/Error/Error.jsx'),
            },
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
    server: {
        open: true,
    },
});
