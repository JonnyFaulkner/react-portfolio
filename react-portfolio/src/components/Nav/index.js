
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../About";
import Portfolio from "../Porfolio";
import Contact from "../Contact";
import Resume from "../Resume"

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <div>
            <nav>
                <ul className="category-list flex-row">
                    {categories.map((category) => (
                        <li
                            className={`mx-2 ${currentCategory.name === category.name
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                {currentCategory.name === "about" &&
                    <About></About>
                }
                {currentCategory.name === "portfolio" &&
                    <Portfolio></Portfolio>
                }
                {currentCategory.name === "contact" &&
                    <Contact></Contact>
                }
                {currentCategory.name === "resume" &&
                    <Resume></Resume>
                }
            </main>
        </div>
    );
}

export default Nav;