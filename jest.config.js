module.exports = {
  projects: [
    {
      displayName: "client",
      testEnvironment: "jsdom",
      testMatch: [
        "<rootDir>/packages/client/src/**/__tests__/**/*.js",
        "<rootDir>/packages/client/src/**/?(*.)(spec|test).js"
      ],
      moduleDirectories: [
        "node_modules",
        "<rootDir>/packages/client/node_modules"
      ],
      moduleNameMapper: {
        "^.+\\.css$": "identity-obj-proxy"
      },
      transform: {
        "^.+\\.js$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "jest-transform-stub"
      },
      transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.js$",
        "^.+\\.css$"
      ],
      collectCoverageFrom: ["<rootDir>/packages/client/**/*.js"]
    },
    {
      displayName: "server",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/packages/server/src/**/__tests__/**/*.js",
        "<rootDir>/packages/server/src/**/?(*.)(spec|test).js"
      ],
      moduleDirectories: [
        "node_modules",
        "<rootDir>/packages/server/node_modules"
      ],
      transform: {
        "^.+\\.js$": "babel-jest"
      },
      transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.js$"],
      collectCoverageFrom: ["<rootDir>/packages/server/**/*.js"]
    }
  ]
};
