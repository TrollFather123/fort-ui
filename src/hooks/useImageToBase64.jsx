import { useState } from 'react';

const useImageToBase64 = () => {
  const [base64String, setBase64String] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const convertImageToBase64 = (file) => {
    setLoading(true);
    setUploadError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64String(reader.result);
      setLoading(false);
    };
    reader.onerror = (err) => {
      setUploadError('Error converting image to base64');
      setLoading(false);
    };

    reader.readAsDataURL(file);
  };

  return {
    base64String,
    loading,
    uploadError,
    convertImageToBase64,
  };
};

export default useImageToBase64;
