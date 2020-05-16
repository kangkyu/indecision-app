import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    this.props.handleAddOption(option);
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}
