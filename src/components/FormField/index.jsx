import './index.styles.scss';

const FormField = ({label, ...attributes}) => {
  return (
    <div className='form-field'>
      <input {...attributes} />
      {label && <label className={`form-field__label ${attributes.value ? 'shrink' : ''}`}>{label}</label>}
    </div>
  );
}

export default FormField;