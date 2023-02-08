import { Configuration } from "webpack";

export interface BuildOptions {
  mode: Configuration["mode"];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  port: number;
  mode: Configuration["mode"];
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}
