// @flow
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

type Props = {
  createBout: (name: string) => void
};

type State = {
  name: string
};

type InputProps = {
  name: string,
  value: string
};

export default class NewBout extends Component<Props, State> {
  state = { name: '' }

  handleChange = (e: SyntheticEvent<HTMLInputElement>, { name, value }: InputProps) => {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.props.createBout(this.state.name);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
        <Form.Button content="Create Bout" />
      </Form>
    );
  }
}
