<div align="center">
  <img src="./src/assets/vodafone-logo.png" alt="Vodafone Logo" width="80" />
  <h1>VOIS Dynamic KYC Form</h1>
  <p><b>Modern, customizable, and robust KYC (Know Your Customer) form system built with React + Vite</b></p>
  <img src="https://img.shields.io/badge/React-18+-61dafb?logo=react" />
  <img src="https://img.shields.io/badge/Vite-4+-646cff?logo=vite" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</div>


## ✨ Features

- ⚡ **Dynamic JSON Schema**: Instantly edit the form structure via a live JSON schema editor modal
- 🌓 **Dark & Light Mode**: Seamless theme toggle with beautiful gradients and modern UI
- 📝 **Multi-Step Navigation**: User-friendly stepper for long forms
- 💾 **Local Storage Persistence**: All progress and schema edits are auto-saved
- 🛡️ **Field Validation**: Real-time, per-field and per-step validation with clear error feedback
- 📅 **Custom Inputs**: Date picker, file upload, dropdown, radio, and more
- 🧪 **Unit & Integration Tests**: Built with React Testing Library + Vitest
- 🖌️ **Fully Responsive**: Looks great on desktop and mobile

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dynamic-kyc-form.git
cd dynamic-kyc-form
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Run tests

```bash
npm test
```

---

## 🛠️ Usage & Customization

- **Edit the Form Schema**: Click the <b>Edit Form Schema</b> button in the app to open the live JSON schema editor. Changes are previewed instantly.
- **Persisted Progress**: All form responses and schema edits are saved in your browser. Use the <b>Reset</b> button to clear progress.
- **Add Custom Fields**: Extend the schema with new field types (see <code>src/components/DynamicForm/renderQuestion.jsx</code>).
- **Styling**: All styles are in <code>src/App.css</code>. Easily adjust colors, gradients, and layout.

---

## 📁 Project Structure

<pre>
kyc-dynamic/
├── public/
├── src/
│   ├── assets/                # Images & logos
│   ├── components/
│   │   ├── DynamicForm/      # Multi-step form logic & rendering
│   │   ├── SchemaModal.jsx   # JSON schema editor modal
│   │   ├── ThemeToggle.jsx   # Dark/Light mode toggle
│   │   └── __tests__/        # Unit & integration tests
│   ├── utils/                # Validators, API mocks
│   ├── App.jsx               # Main app entry
│   ├── App.css               # All styles
│   └── schema/               # Example default schema
├── package.json
└── README.md
</pre>

---

## 🧩 Example JSON Schema

```json
[
  {
    "id": "fullName",
    "type": "text",
    "label": "Full Name",
    "required": true
  },
  {
    "id": "dob",
    "type": "date",
    "label": "Date of Birth",
    "required": true
  },
  {
    "id": "gender",
    "type": "radio",
    "label": "Gender",
    "options": ["Male", "Female", "Other"],
    "required": true
  }
]
```

---

## 🤝 Contributing

1. Fork this repo
2. Create a new branch: <code>git checkout -b feature/your-feature</code>
3. Make your changes and commit: <code>git commit -m 'Add feature'</code>
4. Push to your fork: <code>git push origin feature/your-feature</code>
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
