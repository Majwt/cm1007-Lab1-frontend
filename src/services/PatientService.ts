import type {Patient} from "../model/Patient.ts";

export class PatientService {
    async fetchPatients(): Promise<Patient[]> {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        return res.json();
    }
}