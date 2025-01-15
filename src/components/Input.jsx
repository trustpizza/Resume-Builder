import "../styles/Input.css";

const enabledClassName = "input input-info w-full max-w-xs underlined";
const disabledClassName = "input input-bordered w-full max-w-xs";

function TextInput({ title, value, isEditable, onChange, id }) {
    return (
      <input
        className={isEditable ? enabledClassName : disabledClassName}
        placeholder={title}
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={!isEditable}
        required
      />
    );
  }
  
function PhoneInput({ title, value, isEditable, onChange, id }) {
    return (
      <input
        className={isEditable ? enabledClassName : disabledClassName}
        placeholder={title}
        type="tel"
        value={value}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        required
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        readOnly={!isEditable}
      />
    );
  }
  
function EmailInput({ title, value, isEditable, onChange, id }) {
    return (
      <input
        className={isEditable ? enabledClassName : disabledClassName}
        placeholder={title}
        type="email"
        value={value}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        required
        readOnly={!isEditable}
      />
    );
  }

function DateInput({ title, value, isEditable, onChange, id }) {
    return (
        <input
            className={isEditable ? enabledClassName : disabledClassName}
            type="date"
            placeholder={title}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
            readOnly={!isEditable}
        />
    )
}
  
function Input({ id, title, type, value, onChange, editableInputId, setEditableInputId }) {
    const isEditable = editableInputId === id;

    const renderInput = () => {
      switch (type) {
        case "tel":
          return <PhoneInput title={title} value={value} onChange={onChange} isEditable={isEditable} id={id} />;
        case "email":
          return <EmailInput title={title} value={value} onChange={onChange} isEditable={isEditable} id={id} />;
        case "date":
            return <DateInput title={title} value={value} onChange={onChange} isEditable={isEditable} id={id} />
        case "text":
        default:
          return <TextInput title={title} value={value} onChange={onChange} isEditable={isEditable} id={id} />;
      }
    };
  
    return (
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="flex items-center gap-2 grow">
          {renderInput()}
        </label>
        <button
          className="btn"
          onClick={(e) => setEditableInputId(e, isEditable ? null : id)}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
  
export default Input;  