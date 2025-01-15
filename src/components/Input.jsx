function TextInput({ title, value, isEditable, onChange }) {
    return (
      <input
        className="text"
        placeholder={title}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={!isEditable}
        required
      />
    );
  }
  
  function PhoneInput({ title, value, isEditable, onChange }) {
    return (
      <input
        className="text"
        placeholder={title}
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        readOnly={!isEditable}
      />
    );
  }
  
  function EmailInput({ title, value, isEditable, onChange }) {
    return (
      <input
        className="text"
        placeholder={title}
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        readOnly={!isEditable}
      />
    );
  }
  
  function Input({ id, title, type, value, onChange, editableInputId, setEditableInputId }) {
    const isEditable = editableInputId === id;
    const renderInput = () => {
      switch (type) {
        case "tel":
          return <PhoneInput title={title} value={value} onChange={onChange} isEditable={isEditable} />;
        case "email":
          return <EmailInput title={title} value={value} onChange={onChange} isEditable={isEditable} />;
        case "text":
        default:
          return <TextInput title={title} value={value} onChange={onChange} isEditable={isEditable} />;
      }
    };
  
    return (
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="flex items-center gap-2 grow">
          {renderInput()}
        </label>
        <button
          className="btn"
          onClick={() => setEditableInputId(id)}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
  
export default Input;  