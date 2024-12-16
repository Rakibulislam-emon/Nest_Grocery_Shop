export const fetchFeaturedProducts = async () => {
    const response = await fetch("http://localhost:3000/api/featured");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  