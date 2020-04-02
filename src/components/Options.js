import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>
            Remove All
        </button>
        <p>The number of options is {props.options.length}</p>
        {props.options.length === 0 ?
            <p>Please add an option to get started</p> :
            (
                <div>
                    <p>Your options are:</p>
                    <ol>
                        {props.options.map(option => {
                            return <Option 
                                    key={option}
                                    optionText={option}
                                    handleDeleteOption={props.handleDeleteOption}
                                    />
                        })}
                    </ol>
                </div>
            )
        }
    </div>
);

export default Options