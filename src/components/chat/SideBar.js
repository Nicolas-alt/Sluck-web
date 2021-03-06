import React from 'react';
import SideBarChatInfo from './SideBarChatInfo';

const SideBar = () => {
  return (
    <>
      <div className="inbox_chat">
        <SideBarChatInfo />
        {/* <!-- Espacio extra para scroll --> */}
        <div className="extra_space"></div>
      </div>
    </>
  );
};

export default SideBar;
