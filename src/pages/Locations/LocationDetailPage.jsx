// src/pages/Locations/LocationDetailsPage.jsx
import { useParams, Navigate } from "react-router-dom";
import LocationTemplate from "./LocationTemplate";
import { locationData } from "@/data/LocationData";

const LocationDetailsPage = () => {
  const { locationId } = useParams();

  const data = locationData[locationId];

  // If location not found, redirect to default
  if (!data) {
    return <Navigate to="/locations/australia" replace />;
  }

  return <LocationTemplate data={data} />;
};

export default LocationDetailsPage;
