import React, { useState } from 'react';
import { SidebarLink, MainItem, DropdownLink, SubItem } from './constants';


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    console.log(subnav)

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    <MainItem text={item.title} type={'header'} size={'large'} />
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            <SubItem text={item.title} type={'header'} size={'large'} />
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;