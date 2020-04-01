import React from 'react';

const Option = (props) => {
    return (
        <div>
            <li>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                >
                    Delete Option
                </button>
            </li>
        </div>
    );
};

export {Option as default};