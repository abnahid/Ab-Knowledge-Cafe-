import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3  ml-8">
      <div className="bg-indigo-600 bg-opacity-10 border rounded-lg border-indigo-600 px-12 py-5 mb-4">
        <h3 className="text-2xl font-bold text-indigo-600">
          Reading Time: {readingTime}{" "}
        </h3>
      </div>
      <div className="bg-gray-900 bg-opacity-5 rounded-lg p-7">
        <h2 className="text-2xl font-bold text-gray-900">
          Bookmarks: {Bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
