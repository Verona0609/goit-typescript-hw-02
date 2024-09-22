import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMore from "./components/LoadMore";
import ImageModal from "./components/ImageModal";
import React from "react";

const API_KEY = "g3MQXd2wzY7amLmXckdNQtA06HG8bsIMdlTCZ5-zOw4";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectImg, setSelectImg] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              orientation: "landscape",
              query: query,
              page: page,
              per_page: 15,
              client_id: API_KEY,
            },
          }
        );
        if (Array.isArray(response.data.results)) {
          if (response.data.results.length === 0) {
            setError("No images found for this query 😢");
            toast.error("No images found for this query 😢");
          } else {
            setImages((prevImages) => [
              ...prevImages,
              ...response.data.results,
            ]);
          }
        }
      } catch (error) {
        setError("Failed to fetch images");
        toast.error("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setSelectImg(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectImg(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {loading && <Loader />}
          {images.length > 0 && !loading && <LoadMore onClick={loadMore} />}
        </>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectImg}
      />
    </div>
  );
};

export default App;

