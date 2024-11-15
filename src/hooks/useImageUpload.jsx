import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadImage } from "../api/api.functions";

const useImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const handleImageUpload = async (image) => {
    try {
      setImageLoading(true);

      const uploadImageCloudinary = await uploadImage(image);

      if (uploadImageCloudinary?.secure_url) {
        setImageUrl(uploadImageCloudinary.secure_url);
      } else {
        throw new Error("Image upload failed");
      }
    } catch (err) {
      toast.error(err?.message || "An error occurred during image upload");
    } finally {
      setImageLoading(false);
    }
  };

  return { imageUrl, imageLoading, handleImageUpload };
};

export default useImageUpload;

