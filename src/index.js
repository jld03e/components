import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45pm"
          textPost="pinga frita."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00am"
          textPost="it drives me crazy."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00pm"
          textPost="who's on first."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
