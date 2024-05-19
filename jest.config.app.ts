/* eslint-disable */
const esModules = [
  '@angular',
  '@igniteui',
  'igniteui-angular',
  'lit',
  '@lit',
  'igniteui-angular',
  'igniteui-theming',
  'igniteui-trial-watermark',
];
export default {
  displayName: 'deckbuilder',
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: './coverage/deckbuilder',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: [
    `/node_modules/(?!.*\\.mjs$|${esModules.join('|')})`,
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
};
