import { render } from "react-dom"

function TextInput({ value, onChange }) {
    return (
        <>
        <input
            className="input input-bordered input-info w-full max-w-xs"
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        </>
    )
}

function PhoneInput({ value, onChange }) {
    return (
        <>
        <input
            className="input input-bordered input-info w-full max-w-xs"
            type="tel"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        </>
    )
}

function EmailInput({ value, onChange }) {
    return (
        <>
        <input
            className="input input-bordered input-info w-full max-w-xs"
            type="email"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={true} // Add required attribute for email inputs
        />
        </>
    )
}

function Input({ id, title, type, value, onChange }) {
    const renderInput = () => {
        switch (type) {
            case "text":
                return <TextInput value={value} onChange={onChange}></TextInput>
            case "tel":
                return <PhoneInput value={value} onChange={onChange}/>;
            case "text":
                return <TextInput value={value} onChange={onChange}/>;
            default:
                return <TextInput value={value} onChange={onChange}/>;
        }
    }

    return (
        <div className="flex md:p-4 pb-2 md:pb-0">
            <div className="flex gap-4 grow items-center">
                <label htmlFor={id}>{title}</label>
                {renderInput()}
            </div>
        </div>
    )
}

export default Input;