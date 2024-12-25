import { useState } from "react";
import { FaCamera } from "react-icons/fa";
function Profile() {
  const [bannerUrl, setBannerUrl] = useState<string | null>(
    "https://placehold.co/1500x400"
  );

  const [profileUrl, setProfileUrl] = useState<string | null>(
    "https://placehold.co/100"
  );

  const handleBannerUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Banner"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hiver:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerUpload}
          />
        </button>
      </div>
    </div>
  );
}

export default Profile;