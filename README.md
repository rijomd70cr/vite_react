# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



npm i -D eslint
npx eslint --init

airbnb:- for set of rules (structrue) // add if needed
npx install-peerdeps --dev eslint-config-airbnb
add in .cjs file :- 'airbnb/hooks',  'airbnb', (instead of recommended)

eslint-config-airbnb-typescript (for typescript)
add in .cjs file :-  'airbnb-typescript',
TypeScript parser :- project: './tsconfig.json'
______________________________________________________________________

for m odule.export error :- tsconfig.json file ->  "include": ["src",".eslintrc.cjs"],
____________________________________________________________________

(from search)
eslint :- fix all auto fixable problems
developer :- Reload window
____________________________________________________________________

rule disable :- react/react-in-jsx-scope && import/extensions in .cjs file
______________________________________________________________________

npm install -D vitest
configure vite.config file
_______________________________________________________

React testing library :- npm install --save-dev @testing-library/react
jest-Dom (jsdom):-  npm install --save-dev @testing-library/jest-dom

