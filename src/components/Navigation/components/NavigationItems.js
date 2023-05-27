import React from 'react';
import { ActiveIcon, InactiveIcon, LinkTitle,  } from './navSidebarStyles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const NavigationItems = (props) => {

    const getClassNames = (defaultClass, active) => {
        return classNames(defaultClass, { active: active });
    };

    return (
        <>
            <Link
                to={props.url}
                onClick={(e) => {
                    if (props.url) {
                        e.stopPropagation();
                    }
                }}
                className={getClassNames('nav-item1', props.isActive)}
            >
                {props.inactiveIcon &&
                    <InactiveIcon src={props.inactiveIcon} alt="Icon" className=" inactive-icons" />
                }
                {props.activeIcon &&
                    <ActiveIcon src={props.activeIcon} alt="Icon" className=" active-icons" />
                }
                {props.isActive && (
                    <LinkTitle>
                        {props.tabname}
                    </LinkTitle>
                )}
                {!props.isActive && <LinkTitle>{props.tabname}</LinkTitle>}

            </Link>
            
        </>
    )
}

export default NavigationItems;