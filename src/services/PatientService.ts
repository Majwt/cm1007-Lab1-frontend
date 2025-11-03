import type {Patient} from "../model/Patient.ts";

export const API_BASE_URL = "http://localhost:8080";

export class PatientService {
    async fetchPatients(): Promise<Patient[]> {
        const response = await fetch(`${API_BASE_URL}/patients`);
        return await response.json();
    }
}