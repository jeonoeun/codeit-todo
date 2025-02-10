const BASE_URL = "https://assignment-todolist-api.vercel.app/api";
const TENANT_ID = "jeonoeun";

export const uploadImage = async (
  formData: FormData
): Promise<{ url: string }> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/images/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(errorMessage);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};
