async function subscribeToNewsletter(email) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_LINK + "/apis/v1/newsletter/subscribe", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email }),
        });

        const dataReceived = await response.json();
        return dataReceived;
    } catch (error) {
        return { status: 'error', message: "Subscription failed. Please try again." };
    }
}

export default subscribeToNewsletter;
