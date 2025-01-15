import Input from './Input';
import "../styles/Section.css"

function Section({ section, inputs, onInputChange, editableInputId, setEditableInputId }) {
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
    </fieldset>
    </>
  );
};

export default Section;