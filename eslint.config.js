import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Adicione esta linha
      },
    },
  },
  pluginJs.configs.recommended,
];