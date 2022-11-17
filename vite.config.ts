import { defineConfig } from "vite";
import * as path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
  server: {
    port: 8080, //启动端口
    hmr: {
      host: "127.0.0.1",
      port: 8080,
    },
  },
});
