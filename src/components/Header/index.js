import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    return (
        <div className="header">
            <h1>
                <a href="/" className="title-link">Jonathan Faulkner</a>
            </h1>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
        </div>
    )
}

export default Header;
