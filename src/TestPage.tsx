import React from "react";

/**
 * A simple test component to verify that your React + Vite + TypeScript setup works.
 * You can import and render this component inside App.tsx to test.
 */
const TestPage: React.FC = () => {
    const [count, setCount] = React.useState(0);

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
            <h1>🚀 Vite + React + TypeScript is Working!</h1>
            <p>This is a simple test page component.</p>
            <button
                style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#646cff",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "1rem",
                }}
                onClick={() => setCount(count + 1)}
            >
                Clicked {count} times
            </button>
        </div>
    );
};

export default TestPage;
