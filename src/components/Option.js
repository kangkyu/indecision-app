import React from 'react';

const Option = (props) => {
  return (
    <li>
      {props.optionText}
      <button onClick={(e) => props.handleDeleteOption(props.optionText)}>Delete</button>
    </li>
  );
}

export default Option;
