import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    }
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('options')) {
      this.setState((prevState) => {
        return {
          options: JSON.parse(localStorage.getItem('options'))
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options))
    }
  }

  onMakeDecision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (option) {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      });
    }
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => option !== optionToRemove)
      }
    });
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  render() {
    const subtitle ='Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          options={this.state.options}
          onRemoveAll={this.handleRemoveAll}
          onMakeDecision={this.onMakeDecision}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ['one', 'two']
}
