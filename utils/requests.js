const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const fetchProperties = async () => {
  try {
    if (!apiDomain) return [];

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchProperty = async (id) => {
  try {
    if (!apiDomain) return null;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
export { fetchProperties, fetchProperty };
