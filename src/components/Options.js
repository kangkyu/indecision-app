import React from 'react'
import Option from './Option'

const Options = (props) => {
  return (
    <div>
      <p>{ props.options.length > 0 ? 'Here are your options:' : 'No options' }</p>
      <p>Options: {props.options.length}</p>
      <ul>
        {
          props.options.map((option, index) => <Option optionText={option} key={index} handleDeleteOption={props.handleDeleteOption}/>)
        }
      </ul>
    </div>
  );
}

export default Options;
