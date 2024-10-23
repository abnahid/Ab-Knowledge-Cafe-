const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-lg p-5 my-4">
      <h3 className="text-2xl  font-semibold  text-gray-90">{title}</h3>
    </div>
  );
};

export default Bookmark;
