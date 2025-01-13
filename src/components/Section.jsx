import { useState } from "react";

function Section({ title, fields }) {
    // Initialize state for each field dynamically
    const [values, setValues] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
    );

    // Handle input changes
    const handleChange = (field, value) => {
        setValues((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="section">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <ul>
                {fields.map((field) => (
                    <li key={field} className="mb-2">
                        <label className="block font-medium capitalize">
                            {field}:
                        </label>
                        <input
                            type="text"
                            value={values[field]}
                            onChange={(e) => handleChange(field, e.target.value)}
                            className="border rounded p-1 w-full mt-1"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Section;
