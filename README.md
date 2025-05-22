# 🛠️ My Favorite Utility Functions in JavaScript/TypeScript

This repository includes the utility functions I frequently use in my frontend (and sometimes backend) projects. These helpers are small, reusable, and designed to save time on repetitive tasks — from string manipulation to cookie handling, URL parsing, and more.

> You can read the accompanying blog post here:  
👉 [Read on Medium](https://your-medium-post-link)

---

## 📦 Included Utilities

### 🔠 String Helpers
- `makeFirstLetterUpperCase(str)`
- `truncateText(text, maxLength)`

### 🌍 Localization & Environment
- `guessClientCountry()`

### 🔗 URL Utilities
- `isValidDomain(domain)`
- `isUrl(url)`
- `getUrlParams()`
- `removeUrlParams(keys)`

### 🍪 Cookie Utilities
- `getCookie(name)`
- `setCookie(name, value, days?)`
- `deleteCookie(name)`

### 🎨 UI & Design
- `isLightColor(hexColor)`

### ⏱️ Timing
- `delay(ms)`

### 📁 File Handling
- `downloadFile(blob, filename)`

---

## 🚀 How to Use

Each utility is written in TypeScript and can be imported individually:

```ts
import { truncateText, isUrl } from './utils'
