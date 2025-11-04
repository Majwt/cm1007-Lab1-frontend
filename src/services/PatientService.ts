import type {Patient} from "../model/Patient.ts";

export const API_BASE_URL = "http://localhost:8080";

export class PatientService {
    async fetchPatients(): Promise<Patient[]> {
        const response = await fetch(`${API_BASE_URL}/patients`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch patients: ${response.status} ${response.statusText}`);
        }

        return response.json();
    }

    async fetchPatientById(id: string) {
        const res = await fetch(`${API_BASE_URL}/patient?id=${id}`);
        if (!res.ok) throw new Error(`Failed to fetch patient ${id}`);
        return res.json(); // returns the JSON object
    }
}