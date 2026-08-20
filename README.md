# 🏝️ Far Away — React Packing List

A lightweight, single-page React app for building and tracking your travel packing list. Add items with quantities, mark them as packed, sort the list, and keep an eye on your packing progress — all in the browser, no backend required.

## ✨ Features

- **Add items** — Specify an item description and quantity (1–20) via a simple form
- **Toggle packed status** — Check items off as you pack them
- **Delete items** — Remove individual items from the list
- **Clear entire list** — Wipe the list with a confirmation prompt to avoid accidental deletions
- **Sort items** — View the list by input order, alphabetically by description, or by packed status
- **Live stats** — A footer summary shows how many items you have, how many are packed, and your packing progress as a percentage

## 🛠️ Tech Stack

- [React](https://react.dev/) (functional components + hooks)
- [Create React App](https://create-react-app.dev/) for tooling and build setup
- Plain CSS for styling

## 📂 Project Structure

```
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js          # Root component; owns and lifts up shared state
│   ├── form.js          # Form for adding new items
│   ├── item.js           # Single packing list item
│   ├── logo.js           # App logo/header
│   ├── packingList.js    # Renders items, handles sorting and clearing
│   ├── Stats.js           # Footer with packing progress stats
│   ├── index.js           # App entry point
│   └── index.css          # Global styles
└── README.md
```

> **Note:** `index.js` imports `App` from `./components/App`. If your `App.js` lives directly in `src/`, either move it into a `src/components/` folder or update the import path in `index.js` to `./App` to match your folder layout.

## 🚀 Getting Started


## 🎮 Usage

1. Enter the number of items and a description in the form at the top, then click **Add**.
2. Check off items in the list as you pack them — packed items get a strikethrough.
3. Use the dropdown at the bottom of the list to sort by input order, description, or packed status.
4. Click **Clear list** to remove all items (you'll be asked to confirm first).
5. Watch the footer update with your packing progress.


## 🙏 Acknowledgments

Built as a project while learning React — a great example of lifting state up, controlled forms, and derived state in a small, real-world app.
