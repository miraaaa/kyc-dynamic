export default function SchemaModal({ schemaText, setSchemaText, schemaError, onSave, onCancel }) {
    return (
        <div className="overlay" style={{ zIndex: 1000, background: 'rgba(0,0,0,0.5)' }}>
            <div style={{ background: 'var(--card)', padding: 24, borderRadius: 12, minWidth: 320, maxWidth: 600, width: '90vw' }}>
                <h3>Edit Form Schema (JSON)</h3>
                <form onSubmit={onSave}>
                    <textarea
                        style={{ width: '100%', minHeight: 180, fontFamily: 'monospace', fontSize: 14, marginBottom: 8 }}
                        value={schemaText}
                        onChange={e => setSchemaText(e.target.value)}
                    />
                    {schemaError && <div style={{ color: 'var(--error)', marginBottom: 8 }}>{schemaError}</div>}
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary" >Save</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

