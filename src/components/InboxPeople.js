import React from 'react';
import SearchBox from './chat/SearchBox';
import SideBar from './chat/SideBar';

const InboxPeople = () => {
  return (
    <>
      <div className="inbox_people">
        <SearchBox />
        <SideBar />
      </div>
    </>
  );
};

export default InboxPeople;
