// eslint-disable-next-line react/prop-types
const Checkbox = ({ label, id, handleChange, formValue }) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={id}
      value={id}
      onChange={handleChange}
      checked={formValue[id]}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

export default Checkbox;
