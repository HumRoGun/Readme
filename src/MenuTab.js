import React from 'react';

const MenuTab = ({ title, content, activeTab, onClick }) => {
  return (
    <div className={`tab-pane fade ${activeTab ? 'show active' : ''}`}>
      {content}
    </div>
  );
};

export default MenuTab;
