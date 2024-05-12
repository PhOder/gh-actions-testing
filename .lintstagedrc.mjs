/**
 * @type {import("lint-staged").Config}
 */
const config = {
    "projects/**/*.ts": "eslint --fix",
    "*.{json,md}": "prettier --write",
};

export default config;