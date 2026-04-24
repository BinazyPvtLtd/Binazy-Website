import { useParams, Navigate } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import ServiceDetailsTemplate from "./ServiceDetailsTemplate";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const data = servicesData[serviceId];

  // If the URL doesn't match any service, redirect to home.
  if (!data) return <Navigate to="/" replace />;

  return <ServiceDetailsTemplate {...data} />;
};

export default ServiceDetailsPage;
