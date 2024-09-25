import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import './LeftSideNavigation.css';



const LeftSideNavigation = ({ handleNewsCategory }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('../../../public/data/categories.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })
    }, [])
    return (
        <div>
            <h1 className="font-semibold text-xl">All Category</h1>
            <ul className="mt-4">
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className={`block pl-8 py-3 `}
                        onClick={() => handleNewsCategory(category.id)}>{category.name}</NavLink>)
                }
            </ul>
            <div>

            </div>
        </div >
    );
};


LeftSideNavigation.propTypes = {
    handleNewsCategory: PropTypes.func
}
export default LeftSideNavigation;