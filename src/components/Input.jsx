function TextInput({ title, value, onChange }) {
    return (
        <>
        <input
            className="text"
            placeholder={title}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
        />
        </>
    )
}

function PhoneInput({ title, value, onChange }) {
    return (
        <>
        <input
            className="text"
            placeholder={title}
            type="tel"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        </>
    )
}

function EmailInput({ title, value, onChange }) {
    return (
        <>
        <input
            className="text"
            placeholder={title}
            type="email"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
        />
        </>
    )
}

function Input({ id, title, type, value, onChange }) {
    const renderInput = () => {
        switch (type) {
            case "text":
                return <TextInput title={title} value={value} onChange={onChange}></TextInput>
            case "tel":
                return <PhoneInput title={title} value={value} onChange={onChange}/>;
            case "email":
                return <EmailInput title={title} value={value} onChange={onChange}/>;
            default:
                return <TextInput title={title} value={value} onChange={onChange}/>;
        }
    }

    return (
        <>
        <div className="flex items-center gap-2">
            <label className="input input-bordered flex items-center gap-2" htmlFor={id}>
                {renderInput()}
            </label>
            <button className="btn">
                Edit
            </button>
        </div>
        </>
    )
}

export default Input;