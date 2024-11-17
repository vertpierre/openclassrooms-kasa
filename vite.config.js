import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import sass from 'sass';
import { resolve } from 'node:path';
import fs from 'node:fs';
import path from 'node:path';

const copyDataFile = () => {
    return {
        name: 'copy-data-file',
        buildStart() {
            const sourceFile = path.resolve(__dirname, 'server/properties_data.json');
            const targetDir = path.resolve(__dirname, 'public');
            const targetFile = path.resolve(targetDir, 'properties_data.json');

            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }
            fs.copyFileSync(sourceFile, targetFile);
        }
    };
};

export default defineConfig({
    plugins: [
        react(),
        eslint({
            include: ['src/**/*.js', 'src/**/*.jsx'],
            exclude: ['node_modules/**', 'dist/**'],
        }),
        copyDataFile()
    ],
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
        }
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
    }
});
