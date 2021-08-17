export const useSearch = (props) => {
  const handleSelect = ({ target }) => {
    props.selectSymptom(target.value);
  };

  const handleRemoveSelectedSymptoms = (id) => {
    props.removeSelectedSymptom(id);
  };
  return { handleSelect, handleRemoveSelectedSymptoms };
};
