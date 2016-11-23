import React from 'react';
import merge from 'lodash/merge';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
  }

toggleStep(e) {
    e.preventDefault();
    const toggledStep = merge({}, this.props.step, {
       done: !this.props.step.done
     });
     this.props.updateStep(toggledStep);
  }

  render() {
    return (
      <ol>
      <li className={this.props.step.done ? "step-done step-header" : "step-undone step-header"}>
        <div className="step-info">
          <p className="step-text">{this.props.step.title}</p>
        </div>
        <div className="step-buttons">
          <button
            className={this.props.step.done ? "step-button-done" : "step-button-undone"}
            onClick={this.toggleStep}>
            {this.props.step.done ? "Undo" : "Done"}
          </button>
          <button
            className="step-delete-button"
            onClick={this.props.destroyStep}>
            Delete
          </button>
        </div>
      </li>
      </ol>
    );
  }
}


export default StepListItem;