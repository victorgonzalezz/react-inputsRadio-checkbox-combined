// eslint-disable-next-line react/prop-types
const Checkbox = ({ label, id, name }) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={name}
      value={id}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

export default Checkbox;
