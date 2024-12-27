async function fetchAllJobs() {
    try {
        const responce = await fetch(process.env.NEXT_PUBLIC_BACKEND_LINK + "/apis/v1/user-feed/active-jobs", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            // credentials: "include",
        })

        const dataRecieved = responce.json()
        return dataRecieved
    } catch (error) {
        return { status: 'error', message: "Fetching error" }
    }
}

export default fetchAllJobs;