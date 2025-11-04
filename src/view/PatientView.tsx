import {PatientViewModel} from "../viewmodel/PatientViewModel.ts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const vm = new PatientViewModel();

export const PatientView = observer(() => {
    useEffect(() => {
        vm.loadPatients();
    }, []);

    if (vm.loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Patients</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {vm.patients.map((patient) => (
                    <li key={patient.id} style={{ marginBottom: "1rem" }}>
                        <Link
                            to={`/patient?id=${patient.id}`}
                            style={{
                                textDecoration: "none",
                                backgroundColor: "#646cff",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                display: "inline-block",
                            }}
                        >
                            {patient.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
});

