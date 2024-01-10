//this is a config file for rollup
// this is a modular file
import nodeResolve from "@rollup/plugin-node-resolve";
export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "esm",
  },
  plugins: [nodeResolve()],
};
