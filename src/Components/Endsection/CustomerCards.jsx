const CustomerCards = ({ review }) => {
  const { profile, username, intro, msg } = review;

  return (
    <article className="customer-card w-90 rounded-2xl bg-[#f3e4d8] p-10 shadow-sm hover:scale-117">
      {/* Customer Info */}
      <div className="flex items-center gap-4 ">
        <img
          src={profile}
          alt={`${username} profile`}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div className="flex flex-col items-start justify-center">
          <h3 className="text-sm font-medium">
            {username}
          </h3>

          <p className="text-xs text-gray-600">
            {intro}
          </p>
        </div>
      </div>

      {/* Review */}
      <p className="customer-message mt-4 text-xs leading-5 text-gray-700">
        {msg}
      </p>
    </article>
  );
};

export default CustomerCards;