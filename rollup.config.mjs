// rollup.config.js
import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import livereload from "rollup-plugin-livereload";

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: "dist/cjs/bundle.js",
				format: 'cjs',
				sourcemap: true,
        		name: 'fm-react-layout'
			},
			{
				file: "dist/esm/bundle.js",
				format: "esm",
				sourcemap: true,
			},
			{
				file: 'dist/bundle.min.js',
				format: 'iife',
				name: 'version',
				plugins: [terser()]
			}
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json", exclude: ['**/demos'] }),
			postcss({
				extract: true
			}),
			terser(),
			livereload('dist'),
		],
	},
	{
		input: "dist/esm/types/src/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
		external: [/\.(css|less|scss)$/],
	},
];