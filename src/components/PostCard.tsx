import { memo, useState } from "react";
import useStore from "../store/useStore";
import ReportModal from "./ReportModal";

interface PostCardProps {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  image,
  liked,
}) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const { toggleLike, toggleBookmark, bookmarks, showToast } = useStore();
  const isBookmarked = bookmarks.includes(id);

  const handleBookmark = () => {
    toggleBookmark(id);
    showToast(isBookmarked ? "Bookmark removed" : "Post bookmarked");
  };

  const handleReport = (reason: string) => {
    showToast("Post reported for: " + reason);
    setShowReportModal(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-4">
      <h2 className="font-bold text-lg">{author}</h2>
      <p className="my-2">{content}</p>
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full h-96 object-cover mb-2 rounded"
        />
      )}
      <button
        onClick={() => toggleLike(id)}
        className={`px-4 py-2 rounded ${
          liked ? "bg-red-500 text-white" : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        {liked ? "Unlike" : "Like"}
      </button>

      <button
        onClick={handleBookmark}
        className={`px-4 py-2 rounded ml-2 ${
          isBookmarked
            ? "bg-yellow-500 text-white"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        {isBookmarked ? "Remove Bookmark" : "Bookmark"}
      </button>

      <button
        onClick={() => setShowReportModal(true)}
        className="px-4 py-2 rounded ml-2 bg-red-500 text-white"
      >
        Report
      </button>

      {showReportModal && (
        <ReportModal
          onClose={() => setShowReportModal(false)}
          onReport={handleReport}
        />
      )}
    </div>
  );
};

export default memo(PostCard);
