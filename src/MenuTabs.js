import React, { useState } from 'react';
import MenuTab from './MenuTab';

const MenuTabs = () => {
  const menuItems = [
    { id: 1, title: 'หน้าแรก', content: '' },
    { id: 2, title: 'เมนูอาหารญี่ปุ่น', content: '' },
    { id: 3, title: 'ผู้จัดทำ', content: '' },
    
  ];

  const [activeTab, setActiveTab] = useState(menuItems[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <ul className="nav nav-tabs bg-warning text-light">
        {menuItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-3 ">
        {menuItems.map((item) => (
          <MenuTab
            key={item.id}
            title={item.title}
            content={item.content}
            activeTab={activeTab === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuTabs; 