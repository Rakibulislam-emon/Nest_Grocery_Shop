export const fetchData = async (url) => {
    // Construct the full URL by appending /api/featured to the base API URL
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    
    // Make the fetch request to the constructed URL
    const response = await fetch(apiUrl);
    
    // Check if the response is okay
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    // Return the JSON data from the response
    return response.json();
  };
  