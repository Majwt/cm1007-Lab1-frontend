import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import TestPage from "./TestPage";
import { getBackendTest } from "./api";
import {PatientView} from "./view/PatientView.tsx";
import {PatientDetailsView} from "./view/PatientDetailsView.tsx";

const HomePage: React.FC = () => {
    const navigate = useNavigate();           // Must be synchronous
    const [testString, setTestString] = useState("Loading...");

    useEffect(() => {
        // Async data fetching inside useEffect
        const fetchData = async () => {
            try {
                const result = await getBackendTest();
                setTestString(result);
            } catch (error) {
                setTestString("Error fetching data");
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                fontFamily: "sans-serif",
            }}
        >
            <h1>🏠 Home Page</h1>
            <p>{testString}</p>

            {/* Option 1 — using Link */}
            <Link
                to="/test"
                style={{
                    textDecoration: "none",
                    backgroundColor: "#646cff",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    marginTop: "1rem",
                }}
            >
                Go to Test Page
            </Link>

            {/* Option 2 — using navigate() in a button */}
            <button
                style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#1a1a1a",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "1rem",
                }}
                onClick={() => navigate("/patients")}
            >
                Go to Patients Page
            </button>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/patients" element={<PatientView />} />
            <Route path="/patient" element={<PatientDetailsView />} />
        </Routes>
    );
};

export default App;
