import React from 'react';
import { ActiveIcon, InactiveIcon, LinkTitle, NavLinks } from './navigationStyles';

import { Link } from 'react-router-dom';
import classNames from 'classnames';


const NavigationItems = ({to, inactiveIcon,activeIcon,classNames,tabname}) => {
    
    return (
        <Link
            to={to}
            className={classNames}
        >
            {inactiveIcon &&
                <InactiveIcon src={inactiveIcon} alt="Icon" className=" inactive-icons" />
            }
            {activeIcon &&
                <ActiveIcon src={activeIcon} alt="Icon" className=" active-icons" />
            }
            {tabname &&
                <LinkTitle>
                    {tabname}
                </LinkTitle>
            }
            

        </Link>
    )
}

export default NavigationItems;