import { useNavigate } from "react-router-dom";
import { useValidRoutesPaths } from "../Router";

const useValidNavigate = () => {
  const validRoutePaths = useValidRoutesPaths();
  const navigate = useNavigate();
  const customNavigate = (to: string) => {
    if (validRoutePaths.includes(to)) {
      navigate(to);
      return;
    }
    // if not :: navigate(404 page);
  };
  return customNavigate;
};
export default useValidNavigate;
