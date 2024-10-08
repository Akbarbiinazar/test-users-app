import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'], 
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', 
  },
};

export default config;
