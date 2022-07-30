import React, { useState } from "react";
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import logo from './logo.jpg'
import { GiHamburgerMenu } from 'react-icons/gi'

const allCategories = ['pagrindinis', ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState('');
  const [categories, setCategories] = useState(allCategories)

  const filterItem = (category) => {
    setActiveCategory(category);
    if (category === 'pagrindinis') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }
  return (
    <main>
      <GiHamburgerMenu />
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Meniu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} activeCategory={activeCategory} filterItem={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
