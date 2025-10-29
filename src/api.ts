export const API_BASE_URL = "http://localhost:8080";

export async function getBackendTest(): Promise<string> {
    try {
        const response = await fetch(`${API_BASE_URL}/test`);
        const text = await response.text();
        console.log(text);
        return text; // directly return the text
    } catch (error) {
        console.error("Error fetching backend test:", error);
        return "Error fetching data"; // fallback
    }
}
