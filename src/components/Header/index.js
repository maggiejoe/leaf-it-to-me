import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../images/leaf-it-to-me-name-no-bg.png';

import Navigation from '../Navigation';

const Header = (props) => {
    const {
        options = [],
        currentOption,
        setCurrentOption
    } = props
    return (
        <div>
            <div>
                <img src={logo} alt='logo' className='logoSize'></img>

                <div>
                    <Navigation
                        options={options}
                        currentOption={currentOption}
                        setCurrentOption={setCurrentOption}
                    >
                    </Navigation>
                </div>
            </div>
        </div>
    )
}

export default Header;