"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProperty } from "@/utils/requests";

const PropertyPage = () => {
  const [property, setProperty] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log("Error fetchting property", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) fetchPropertyData();
  }, [id, property]);

  return <div>PropertyPage</div>;
};

export default PropertyPage;
