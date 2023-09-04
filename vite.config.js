import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    checker({
      overlay: { initialIsOpen: false },
      typescript: false,
     
    }),],
  server: {
    port: 3000,
  }
});
