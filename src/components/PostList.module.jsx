import NewPost from './NewPost';
import Post from './Post';
import classes from './Postlist.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post
          author='Jeet Kaushik'
          body="He knew he wasn't a 10, but you don't have to make him feel like 0."
        />
        <Post
          author='Jeet Kaushik'
          body="He knew he wasn't a 10, but you don't have to make him feel like 0."
        />
      </ul>
    </>
  );
}

export default PostList;
