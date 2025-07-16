import React from "react";
import PropertyCard from "@/components/PropertyCard";

const fetchProperties = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <div>No properties found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((p) => (
                <PropertyCard key={p._id} property={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
