import { useState } from "react";
import useStore from "../store/useStore";

const ReportModal: React.FC<{
  onClose: () => void;
  onReport: (reason: string) => void;
}> = ({ onClose, onReport }) => {
  const [selectedReason, setSelectedReason] = useState<string>("");
  const { showToast } = useStore();

  const handleSubmit = () => {
    if (selectedReason) {
      onReport(selectedReason);
      showToast("Post Reported");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-96">
        <h2 className="text-lg font-bold">Report Post</h2>
        <div className="mt-2">
          <label className="block mb-1">Select a reason:</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
          >
            <option value="">--Select Reason--</option>
            <option value="Spam">Spam</option>
            <option value="Harassment">Harassment</option>
            <option value="Inappropriate">Inappropriate Content</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="mr-2">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
