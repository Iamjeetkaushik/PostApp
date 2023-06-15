import NewPost from './NewPost';
import Post from './Post';
import classes from './Postlist.css';

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post
          author='Jeet Kaushik'
          body="He knew he wasn't a 10, but you don't have to make him feel like 0."
        />
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
