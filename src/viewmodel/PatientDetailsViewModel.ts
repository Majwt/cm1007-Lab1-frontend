import { makeAutoObservable, runInAction } from "mobx";
import type { Patient } from "../model/Patient.ts";
import { PatientService } from "../services/PatientService.ts";

export class PatientDetailsViewModel {
    patient: Patient | undefined = undefined;
    loading = false;
    private service = new PatientService();

    constructor() {
        makeAutoObservable(this);
    }

    async loadPatient(id: string) {
        runInAction(() => { this.loading = true; });

        try {
            const fetchedPatient = await this.service.fetchPatientById(id);

            runInAction(() => {
                this.patient = fetchedPatient;
            });
        } catch (err) {
            console.error(err);
            runInAction(() => {
                this.patient = undefined;
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}
