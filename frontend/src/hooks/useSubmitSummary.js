import { useState } from 'react';
import toast from 'react-hot-toast';

function validateInputs({ subject, rollNumber, phoneNumber }) {
  if (!subject || !rollNumber || !phoneNumber) {
    toast.error('All fields are required');
    return false;
  }
  return true;
}

const useSubmitSummary = () => {
  const [loading, setLoading] = useState(false);

  const submitSummary = async ({ subject, rollNumber, phoneNumber }) => {
    const isValid = validateInputs({ subject, rollNumber, phoneNumber });
    if (!isValid) return;

    setLoading(true);
    try {
      const response = await fetch('/api/attsummary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, rollNumber, phoneNumber }),
      });

      const data = await response.json();

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message || 'Summary submitted successfully');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitSummary };
};

export default useSubmitSummary;
