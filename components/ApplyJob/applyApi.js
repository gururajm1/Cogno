export const getResumeDetailsFromAI = async (file) => {
    try {
        const formData = new FormData();
        formData.append('input_resume', file);
        const response = await fetch(process.env.NEXT_PUBLIC_VITE_AI_SERVICE_LINK + "/resume_parser", {

            method: "POST",
            body: formData,
        })

        const dataRecieved = response.json()
        return dataRecieved
    } catch (error) {
        return { status: 'error', message: "Fetching error" }
    }
}

export const getSimilarityScore = async (file, jobDescription) => {
    // const encodedJobDescription = encodeURIComponent(jobDescription);
    const url = process.env.NEXT_PUBLIC_VITE_AI_SERVICE_LINK + `/similarity_score_V2`;
    const formData = new FormData();
    formData.append('input_resume', file);
    formData.append('input_jd', jobDescription)

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching similarity score:', error);
        return { status: 'error', message: 'Fetching error' };
    }
}

export const getApplicationForm = async (formId) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_LINK + `/apis/v1/application-form/${formId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include",
        });
        
        console.log('Response:', res);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { status: 'error', message: error.message || 'Some Error encountered. Please Try Again!!!' };
    }
};

export const applyJobThroughResume = async(job_id, body)=> {
    try {
        const responce = await fetch(process.env.NEXT_PUBLIC_BACKEND_LINK + `/apis/v1/application/apply/${job_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              body: JSON.stringify(body),
        })

        const data = responce.json()
        return data
    } catch (error) {
        return { status: 'error', message: "Some Error encountered. Please Try Again!!!" }
    }
}