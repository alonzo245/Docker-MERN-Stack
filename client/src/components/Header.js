import React, { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeSelectorState'


export const Header = () => {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <>
            <div className="toggle-container">
            <input type="checkbox" id="switch" name="theme" 
            checked={dark}
            onClick={toggle}
            // onChange={this.handleInputChange}
             /><label htmlFor="switch">Toggle</label>
        </div>

            <h2>
                Wallet Expence Buddy
        </h2>
        </>
    )
}
