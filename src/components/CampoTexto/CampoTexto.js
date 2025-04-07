import './CampoTexto.css';

export const CampoTexto = (props) => {
  console.log(props)
  const placeholderModificadora = `${props.placeholder}...`;

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input placeholder={placeholderModificadora} />
    </div>
  );
};
