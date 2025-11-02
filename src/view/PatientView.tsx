import {PatientViewModel} from "../viewmodel/PatientViewModel.ts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

const vm = new PatientViewModel();

export const PatientView = observer(() => {
    useEffect(() => {
        vm.loadPatients();
    }, []);

    if (vm.loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Patients</h2>
            <ul>
                {vm.patients.map(patient => (
                    <li key={patient.id}>
                        {patient.name}
                    </li>
                ))}
            </ul>
        </div>
    );
});