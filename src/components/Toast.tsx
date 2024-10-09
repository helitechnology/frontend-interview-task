import { useEffect } from "react";
import useStore from "../store/useStore";

const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useStore();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearToast();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toastMessage, clearToast]);

  return toastMessage ? (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded shadow-lg">
      {toastMessage}
    </div>
  ) : null;
};

export default Toast;
