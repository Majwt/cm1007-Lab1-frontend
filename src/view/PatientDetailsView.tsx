import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { PatientDetailsViewModel } from "../viewmodel/PatientDetailsViewModel.ts";

const vm = new PatientDetailsViewModel();

export const PatientDetailsView = observer(() => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    useEffect(() => {
        if (id) {
            vm.loadPatient(id);
        }
    }, [id]);

    if (vm.loading) return <p>Loading...</p>;
    if (!vm.patient) return <p>No patient found.</p>;

    return (
        <div>
            <h2>Patient: {vm.patient.name}</h2>
            <p>ID: {vm.patient.id}</p>
            <p>Birthday: {vm.patient.birthday}</p>
        </div>
    );
});
