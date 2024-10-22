import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    cover,
    title,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtag,
  } = blog;

  return (
    <div className="mb-20  space-y-4">
      <img className="w-full mb-8" src={cover} alt={title} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          {" "}
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onclick={() => handleAddBookmark(blog)}
            className="ml-2 text-2xl"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="" className="ml-4">
              {hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onclick={() => handleMarkAsRead(reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
