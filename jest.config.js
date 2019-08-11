module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'ts',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!vuetify|register-service-worker)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,vue,ts,tsx}",
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
}
