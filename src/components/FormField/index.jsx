import { 
  FieldContainer,
  Field,
  Label
} from './index.styles.jsx';

const FormField = ({label, ...attributes}) => {
  return (
    <FieldContainer>
      <Field {...attributes} />
      {label && <Label shrink={(attributes.value ? 'shrink' : '')}>{label}</Label>}
    </FieldContainer>
  );
}

export default FormField;