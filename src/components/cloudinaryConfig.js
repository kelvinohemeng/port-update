// cloudinaryConfig.js

const cloudinaryConfig = {
  cloudName: "base-data",
  apiKey: import.meta.env.VITE_APP_CLOUDINARY_API_KEY,
  apiSecret: import.meta.env.VITE_APP_CLOUDINARY_API_SECRET,
};

export default cloudinaryConfig;
