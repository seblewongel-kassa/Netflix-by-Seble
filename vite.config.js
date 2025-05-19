import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Netflix-by-Seble/", // 👈 add this line
  plugins: [react()],
});
