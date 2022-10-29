import React from 'react';

import Container from 'react-bootstrap/container';

const Navigation = (props) => {
    const {
        options = [],
        currentOption,
        setCurrentOption
    } = props

    return (
        <Container>
            <div className='justify-content-center text-decoration-none'>
                {options.map((option) => (
                    <li
                    className={` ${currentOption.name === option.name && ""}`}
                    key={option.name}
                    >
                        <span
                        onClick={() => {
                            setCurrentOption(option.name);
                        }}>
                            {option.name}
                        </span>
                    </li>
                ))}
            </div>
        </Container>
    )
}

export default Navigation;