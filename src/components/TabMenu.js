import React, { useState } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';

  // tabs: 탭 메뉴에 표시할 탭들의 이름이 담긴 배열.
  // defaultTab: 기본으로 선택할 탭의 이름.
const TabMenu = ({ tabs, defaultTab }) => {  // props로 tabs, defaultTab를 받음.

  const [activeTab, setActiveTab] = useState(defaultTab); // 기본 값이 defaultTab = UserList
  // activeTab: 현재 활성화된 탭을 저장하는 상태 변수.
  // setActiveTab: activeTab 상태를 업데이트하는 함수



  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭한 탭을 활성화 함.
  };

  return (

    <div className="tab-menu">

      <div className="tab-buttons">
        {tabs.map((tab) => ( // tabs 배열을 반복하면서 각 탭에 대한 버튼을 생성 = tabs={['UserList', 'UserDetail']}

          <button
            key={tab} // key 값으로 tab을 사용하여 각 탭을 구분.
            className={activeTab === tab ? 'active' : ''} // 현재 활성화된 탭과 비교하여 active 클래스를 추가함.
            onClick={() => handleTabClick(tab)} //// 버튼을 클릭하면 해당 탭을 활성화하도록 이벤트 핸들러를 설정.
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map((tab) => ( //// tabs 배열을 반복하면서 각 탭에 해당하는 컨텐츠를 생성함.
          <div key={tab} className={activeTab === tab ? 'active' : 'hidden'}> 
          {/* activeTab과 현재 탭(tab)을 비교하여 해당 탭이 활성화된 경우 active 클래스를 추가함. */}
            {tab === 'UserList' && <p><UserList /></p>} 
            {tab === 'UserDetail' && <p><UserDetail /></p>}
            {/* 각 탭에 해당하는 컴포넌트(UserList와 UserDetail)를 조건부 렌더링함. */}
          </div>
        ))}
      </div>
    </div>

  );
};

export default TabMenu;