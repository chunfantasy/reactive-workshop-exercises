import React, { Component } from 'react';

class FeedbackForm extends Component {
  state = { feedback: 'Your opinion matters to us...' };
  postFeedback = event => {
    alert(`Sending feedback: ${this.state.feedback}`);
    event.preventDefault();
  };
  onChange = event => this.setState({ feedback: event.target.value });
  render() {
    return (
      <form onSubmit={this.postFeedback}>
        <label>
          Feedback:
          <textarea value={this.state.feedback} onChange={this.onChange} />
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default FeedbackForm;
