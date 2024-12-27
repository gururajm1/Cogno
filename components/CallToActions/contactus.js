//contactUs.js
export const contactUs = async (formData) => {


        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_LINK + "/apis/v1/contact-us/add", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
        
          return response.json();
}
