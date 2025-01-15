import Input from './Input';
import "../styles/Section.css"

function Section({ section, inputs, onInputChange, editableInputId, setEditableInputId, isDeletable = false, onDelete }) {
  return (
    <>
    <fieldset className="card bg-slate-50 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{section.title}</h2>
        {inputs.map((input) => (
          <Input
            key={`${section.id}-${input.id}`}
            {...input}
            onChange={(value) => onInputChange(input.id, value)}
            editableInputId={editableInputId}
            setEditableInputId={setEditableInputId}         
          >
          </Input>
        ))}

      </div>
      {isDeletable && (
        <button
          className="btn btn-circle bg-red-500 hover:bg-red-600 text-white absolute -top-4 -right-4"
          onClick={(e) => onDelete(e, section)}
        >
          ✕
        </button>
      )}
    </fieldset>
    </>
  );
};

export default Section;