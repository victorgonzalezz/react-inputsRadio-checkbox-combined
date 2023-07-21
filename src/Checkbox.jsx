// eslint-disable-next-line react/prop-types
const Checkbox = ({ label, id, handleChange, name }) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={name}
      value={id}
      onChange={handleChange}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

export default Checkbox;
