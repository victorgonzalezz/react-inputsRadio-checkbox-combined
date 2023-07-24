// eslint-disable-next-line react/prop-types
const Radio = ({ label, id, name}) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      value={id}

    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

export default Radio;
