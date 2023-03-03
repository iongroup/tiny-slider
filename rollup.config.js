import terser  from "@rollup/plugin-terser";
const config = {
  input: 'src/tiny-slider.js',
  output: {
    file: 'dist/tiny-slider.js',
    format: 'umd',
    name: 'tns'
  }
};

const config_min = {
  input: 'src/tiny-slider.js',
  output: {
    file: 'dist/min/tiny-slider.min.js',
    format: 'umd',
    name: 'tns'
  },
  plugins: [terser()]
}

export default [config, config_min];
