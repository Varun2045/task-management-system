import React from "react";
const DEFAULT_PROFILE_PICTURE = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9Ijc1IiBmaWxsPSIjRTVFNUY3Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNTUiIHI9IjIwIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik00NSAxMjBDNDUgMTAwIDYwIDg1IDc1IDg1QzkwIDg1IDEwNSAxMDAgMTA1IDEyMFYxMzBINDVWMTIwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K"

const AvatarGroup = ({ avatars, maxVisible = 3 }) => {
  return (
    <div className="flex items-center">
      {avatars.slice(0, maxVisible).map((avatar, index) => (
        <img
          key={index}
          src={avatar || DEFAULT_PROFILE_PICTURE}
          alt={`Avatar ${index}`}
          className="w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0"
        />
      ))}

      {avatars.length > maxVisible && (
        <div className="w-9 h-9 items-center justify-center bg-blue-50 text-sm font-medium rounded-full border-2 border-white -ml-3 ">
          +{avatars.length - maxVisible}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
