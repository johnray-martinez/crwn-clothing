import { 
  FieldContainer,
  Field,
  Label
} from './index.styles.jsx';

type FormFieldProps = {
  label?: string,
  [attributes: string]: any
}

const FormField = ({label, ...attributes}: FormFieldProps) => {
  return (
    <FieldContainer>
      <Field {...attributes} />
      {label && <Label shrink={(attributes.value ? 'shrink' : '')}>{label}</Label>}
    </FieldContainer>
  );
}

export default FormField;