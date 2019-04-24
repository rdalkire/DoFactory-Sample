// From a reactjs.net tutorial, 
// [Your first component](https://reactjs.net/tutorials/aspnet4.html#your-first-component)
class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">Hello, world! I am a CommentBox.</div>
        );
    }
}

ReactDOM.render(<CommentBox />, document.getElementById('content'));
