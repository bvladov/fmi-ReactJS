import React from "react";
//import Comment from "./Comment";
import SubmitForm from "./SubmitForm";

class Thread extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      comments: [],
      newComment: ""
    };
  }


  render() {
    return (
      <div>
        {this.props.user}: {this.props.title}
        {this.state.comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
        <SubmitForm
          onSubmit={this.onSubmit}
          onChange={this.handleChange}
          value={this.state.newComment}
        />
      </div>
    );
  }
}

export default Thread;
