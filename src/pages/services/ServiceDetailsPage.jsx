import { useParams, Navigate } from "react-router-dom";
import { serviceMenu, servicesData } from "@/data/ServiceData";
import ServiceDetailsTemplate from "@/pages/services/ServiceDetailsTemplate";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const data = servicesData[serviceId];
  const defaultServicePath = serviceMenu[0]?.to || "/";

  // If the URL doesn't match any service, redirect to the default service.
  if (!data) return <Navigate to={defaultServicePath} replace />;

  return <ServiceDetailsTemplate {...data} serviceId={serviceId} />;
};

export default ServiceDetailsPage;
