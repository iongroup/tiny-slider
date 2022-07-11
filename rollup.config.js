import { uglify } from "rollup-plugin-uglify";
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
  plugins: [uglify()]
}

export default [config, config_min];
