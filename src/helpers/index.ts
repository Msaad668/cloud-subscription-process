import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { alertToastConfig } from "../statics/alert-config";

export const showToastMsg = (icon: string, title: string) => {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon,
    title,
    ...alertToastConfig,
  });
};
