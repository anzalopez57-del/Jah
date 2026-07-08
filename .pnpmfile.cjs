// This file is automatically loaded by pnpm before resolving dependencies
// It ensures proper workspace detection and resolution

module.exports = {
  hooks: {
    readPackage(pkg, context) {
      // Ensure workspace packages are properly marked
      // This helps pnpm recognize them during resolution
      return pkg;
    },
  },
};
