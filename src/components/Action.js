import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button onClick={props.onMakeDecision} disabled={props.options.length === 0}>What should I do?</button>
      <button onClick={props.onRemoveAll}>Remove all</button>
    </div>
  );
}

export default Action;
