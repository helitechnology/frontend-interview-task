import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import PostCard from "./PostCard";

const BookmarksPage: React.FC = () => {
  const { posts, bookmarks } = useStore();
  const bookmarkedPosts = posts.filter((post) => bookmarks.includes(post.id));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Posts</h1>
      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            image={post.image}
            liked={post.liked}
          />
        ))
      ) : (
        <p>No bookmarks yet.</p>
      )}
      <Link to="/">Back to Feed</Link>
    </div>
  );
};

export default BookmarksPage;
