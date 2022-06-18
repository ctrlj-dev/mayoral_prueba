const nextJest = require('next/jest');

const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['../jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  rootDir: 'src',
  restoreMocks: true,
  moduleFileExtensions: ['...defaults.moduleFileExtensions', 'js', 'jsx', 'ts', 'tsx'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
