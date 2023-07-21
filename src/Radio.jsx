// eslint-disable-next-line react/prop-types
const Radio = ({ label, id, handleChange, name }) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      value={id}
      onChange={handleChange}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

export default Radio;
