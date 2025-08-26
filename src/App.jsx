
import React, { useState, useEffect } from "react";
import DynamicForm from "./components/DynamicForm/DynamicForm";
import ThemeToggle from "./components/ThemeToggle";
import SchemaModal from "./components/SchemaModal";
import defaultExampleSchema from "./schema/defaultSchema";
import { mockSubmitApi } from "./utils/api";
import vodafoneLogo from "./assets/vodafone-logo.png";

import "./styles/DynamicKYCApp.css";
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("kyc_theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("kyc_theme", theme);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [schema, setSchema] = useState(defaultExampleSchema);
  const [showSchemaModal, setShowSchemaModal] = useState(false);
  const [schemaText, setSchemaText] = useState(JSON.stringify(defaultExampleSchema, null, 2));
  const [schemaError, setSchemaError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState(null);

  async function onSubmit(values) {
    setSubmitting(true);
    const res = await mockSubmitApi(values);
    setSubmitting(false);
    if (res.ok) {
      setSubmittedInfo({ id: res.id, values });
      // show temporary success then clear after 5s
      setTimeout(() => setSubmittedInfo(null), 5000);
    }
  }

  function handleOpenSchemaModal() {
    setSchemaText(JSON.stringify(schema, null, 2));
    setSchemaError("");
    setShowSchemaModal(true);
  }

  function handleSchemaSave(newText) {
    try {
      const parsed = JSON.parse(newText);
      setSchema(parsed);
      setShowSchemaModal(false);
      setSchemaError("");
    } catch (err) {
      setSchemaError("Invalid JSON: " + err.message);
    }
  }

  return (
    <div className={`app-root ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <div className="container">
        <header className="app-header">
          <div className="logo-container">
            <img
              src={vodafoneLogo}
              alt="Vodafone Logo"
              className="logo"
            />
            <h1 className="title">VOIS KYC Form</h1>
          </div>
          <div className="header-controls">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>

        <main>
          <p className="intro">
            Welcome to Vodafone Intelligent Solutions. Please fill out the KYC form below.
          </p>

          <button className="btn btn-secondary" onClick={handleOpenSchemaModal}>
            Edit Form Schema
          </button>

          {Array.isArray(schema) && schema.length > 0 ? (
            <DynamicForm schema={schema} onSubmit={onSubmit} />
          ) : (
            <div className="empty-schema">
              The form schema is empty. Please edit the schema to add fields.
            </div>
          )}

          {submitting && <div className="overlay">Submitting...</div>}

          {submittedInfo && (
            <div className="success-modal">
              <div className="success-card">
                <h3>
                  Submitted Successfully <span role="img" aria-label="check">✅</span>
                </h3>
                <p>
                  Submission ID: <span className="submission-id">{submittedInfo.id}</span>
                </p>
                <pre className="submitted-json">
                  {JSON.stringify(submittedInfo.values, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </main>

        {showSchemaModal && (
          <SchemaModal
            schemaText={schemaText}
            setSchemaText={setSchemaText}
            schemaError={schemaError}
            onSave={() => handleSchemaSave(schemaText)}
            onCancel={() => setShowSchemaModal(false)}
          />
        )}
      </div>
    </div>
  );
}



