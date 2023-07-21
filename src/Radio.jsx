// eslint-disable-next-line react/prop-types
const Radio = ({ label, id, handleChange, name, formValue }) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      onChange={handleChange}
      value={id}
      checked={formValue[name] === id}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

export default Radio;
