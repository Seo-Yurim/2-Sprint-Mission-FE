import React, { useState } from 'react';
import '../css/OrderMenu.css';
import arrowDown from '../images/ic_arrow_down.png';
import sortIcon from '../images/ic_sort.png';

const OrderMenu = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: 'recent', label: '최신 순' },
    { value: 'favorite', label: '좋아요 순' }
  ];

  const handleOptionClick = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className="order-menu">
      <div className="order-menu-selected" onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value === value)?.label || 'Select...'}
        <img className="sort-icon" src={arrowDown} />
        <img className="mobile-sort-icon" src={sortIcon} />
      </div>
      {isOpen && (
        <div className="order-menu-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="order-menu-option"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderMenu;
