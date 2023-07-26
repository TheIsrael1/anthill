// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/USER/Desktop/code/gig/anthill/node_modules/.pnpm/vite@4.3.2_sass@1.62.1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/USER/Desktop/code/gig/anthill/node_modules/.pnpm/@vitejs+plugin-react@4.0.0_vite@4.3.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/USER/Desktop/code/gig/anthill/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.0.2_vite@4.3.2/node_modules/vite-tsconfig-paths/dist/index.mjs";
import svgr from "file:///C:/Users/USER/Desktop/code/gig/anthill/node_modules/.pnpm/vite-plugin-svgr@3.2.0_vite@4.3.2/node_modules/vite-plugin-svgr/dist/index.js";
import { imagetools } from "file:///C:/Users/USER/Desktop/code/gig/anthill/node_modules/.pnpm/vite-imagetools@5.0.4/node_modules/vite-imagetools/dist/index.js";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const mainConfig = {
    plugins: [react(), tsconfigPaths({ loose: true }), svgr(), imagetools()],
    define: {
      "process.env": process.env
    }
  };
  return env.VITE_USE_PROXY === "true" ? {
    ...mainConfig,
    server: {
      proxy: {
        "/api": {
          target: env == null ? void 0 : env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    }
  } : mainConfig;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcY29kZVxcXFxnaWdcXFxcYW50aGlsbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVVNFUlxcXFxEZXNrdG9wXFxcXGNvZGVcXFxcZ2lnXFxcXGFudGhpbGxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VTRVIvRGVza3RvcC9jb2RlL2dpZy9hbnRoaWxsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCB7IGltYWdldG9vbHMgfSBmcm9tICd2aXRlLWltYWdldG9vbHMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHttb2RlfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG4gIGNvbnN0IG1haW5Db25maWcgPSB7XHJcbiAgICBwbHVnaW5zOiAgW3JlYWN0KCksIHRzY29uZmlnUGF0aHMoeyBsb29zZTogdHJ1ZSB9KSwgc3ZncigpLCBpbWFnZXRvb2xzKCldLFxyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZW52LlZJVEVfVVNFX1BST1hZID09PSAndHJ1ZScgP1xyXG4gIHtcclxuICAgIC4uLm1haW5Db25maWcsXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgIHRhcmdldDogZW52Py5WSVRFX0FQSV9VUkwsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTpcclxuICBtYWluQ29uZmlnXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1QsU0FBUyxjQUFjLGVBQWU7QUFDeFYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGtCQUFrQjtBQUczQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFDLEtBQUksTUFBTTtBQUN0QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsUUFBTSxhQUFhO0FBQUEsSUFDakIsU0FBVSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDO0FBQUEsSUFDeEUsUUFBUTtBQUFBLE1BQ04sZUFBZSxRQUFRO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBRUEsU0FBTyxJQUFJLG1CQUFtQixTQUM5QjtBQUFBLElBQ0UsR0FBRztBQUFBLElBQ0gsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFVBQ04sUUFBUSwyQkFBSztBQUFBLFVBQ2IsY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLElBQ0E7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
