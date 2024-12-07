import axios from 'axios';

const Status = async () => {

    const instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
    })

    try {
        const response = await instance.get("http://localhost:8000");
        return (
            <main>
                <h1>Status is: {response.data.status}</h1>
            </main>
        );

    } catch (err) {
        console.error("Failed to communicate with api: " + err)
    }
}

export const App = () => {
    return (
        <div className="App">
            <Status/>
        </div>
    );
}
