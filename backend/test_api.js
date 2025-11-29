const register = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "TestLogin",
                email: "testlogin@example.com",
                password: "password123"
            })
        });
        const data = await response.json();
        console.log("Status:", response.status);
        console.log("Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
};
register();
