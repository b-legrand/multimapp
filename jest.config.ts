import type { Config } from "jest";

// eslint-disable-next-line no-undef
(globalThis as any).ngJest = {
  skipNgcc: false,
  tsconfig: "tsconfig.spec.json",
};

const esModules = [
  "@angular",
  "angular-split",
  "typescript-logger",
  "@ngneat/falso",
].join("|");

const jestConfig: Config = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
};

export default jestConfig;
