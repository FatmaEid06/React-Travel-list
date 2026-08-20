import { useState } from "react";
import Logo from "./logo";
import PackingList from "./packingList";
import Form from "./form";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "T-shirts", quantity: 5, packed: false },
// ];

export default function App() {
  // up lifting state to the parent component (App) so that it can be shared with other components
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirming = window.confirm(
      "Are you sure you want to delete all items from your list?",
    );

    if (confirming) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
