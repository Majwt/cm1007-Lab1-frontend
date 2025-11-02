import { makeAutoObservable } from "mobx";
import type {Patient} from "../model/Patient.ts";
import {PatientService} from "../services/PatientService.ts";


export class PatientViewModel {
    patients: Patient[] = [];
    loading = false;
    private service = new PatientService();

    constructor() {
        makeAutoObservable(this);
    }

    async loadPatients() {
        this.loading = true;
        this.patients = await this.service.fetchPatients();
        this.loading = false;
    }
}