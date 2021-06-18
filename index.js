function Button(props) {
  //   Write your code here.
  const { buttonName, buttonStyle } = props;
  console.log(buttonName);
  const buttonElement = <button className={buttonStyle}>{buttonName}</button>;
  return buttonElement;
}

const element = (
  //   Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button buttonName="Like" buttonStyle="likeButton" width="width" />
      <Button buttonName="Comment" buttonStyle="commentButton" width="width" />
      <Button buttonName="Share" buttonStyle="shareButton" width="width" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
