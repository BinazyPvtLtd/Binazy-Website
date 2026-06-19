import { useParams, Navigate } from "react-router-dom";
import { industriesData } from "@/data/industriesData";
import IndustryDetailsTemplate from "@/pages/industries/IndustryDetailsTemplate";

const IndustryDetailsPage = () => {
  const { industriesId } = useParams();
  const data = industriesData[industriesId];

  if (!data) return <Navigate to="/" replace />;

  return <IndustryDetailsTemplate {...data} industryId={industriesId} />;
};

export default IndustryDetailsPage;

