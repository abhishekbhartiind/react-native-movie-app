npm install -g expo-cli
npx create-expo-app@latest movie-app
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
npx tailwindcss init

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

babel.config.js
```bash
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  }
}
```
npx expo customize metro.config.js
`https://www.nativewind.dev/getting-started/installation`