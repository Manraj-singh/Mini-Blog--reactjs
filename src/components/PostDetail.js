import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  //getting postid from params of url.
  //the name postId should be exact same what we defined in route.
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
