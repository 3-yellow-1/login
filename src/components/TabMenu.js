import React, { useState } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';

const TabMenu = ({ tabs, defaultTab }) => {  // props로 tabs, defaultTab를 받는다. 

  const [activeTab, setActiveTab] = useState(defaultTab); // 기본 값이 defaultTab = UserList
  // activeTab 현재 활성화 된 탬

  const handleTabClick = (tab) => {
    setActiveTab(tab); // onClick하는 탭이 활성화 됨.
  };

  return (

    <div className="tab-menu">

      <div className="tab-buttons">
        {tabs.map((tab) => ( // map함수로 tabs의 배열을 반복. = tabs={['UserList', 'UserDetail']}

          <button
            key={tab} // key 값을 부여함.
            className={activeTab === tab ? 'active' : ''} // activeTab(활성화된 탭)이 
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map((tab) => (
          <div key={tab} className={activeTab === tab ? 'active' : 'hidden'}> 
          {/* activeTab이 tab이면  active 아니면 hidden(display: none;)*/}
            {tab === 'UserList' && <p><UserList /></p>} 
            {tab === 'UserDetail' && <p><UserDetail /></p>}
          </div>
        ))}
      </div>
    </div>

  );
};

export default TabMenu;