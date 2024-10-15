import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {BASE_URL_PARTIAL} from "./src/utils/constants";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            [BASE_URL_PARTIAL]: {
                target:"https://api.stlouisfed.org/fred",
                changeOrigin:true,
                rewrite: (path)=> path.replace(/^\/api/,'')
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler' // or "modern"
            }
        }
    },
    plugins: [react()],
})
