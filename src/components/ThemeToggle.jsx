export default function ThemeToggle({ theme, setTheme }) {
return (
    <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
            display: "flex",
            alignItems: "center",
            background: theme === "light"
                ? "linear-gradient(90deg, #f8fafc 60%, #e0e7ff 100%)"
                : "linear-gradient(90deg, #1e293b 60%, #334155 100%)",
            color: theme === "light" ? "#1e293b" : "#f8fafc",
            border: "none",
            borderRadius: "999px",
            padding: "0.5rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
            outline: "none",
            gap: "0.5rem"
        }}
        aria-label="Toggle theme"
    >
        <span
            style={{
                fontSize: "1.3rem",
                transition: "transform 0.3s",
                transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)"
            }}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </span>
        <span>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
    </button>
);
}
