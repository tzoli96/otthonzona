function convertFormDataToJson(formElement) {
    const formData = new FormData(formElement);
    const formDataObject = {};
  
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
  
    return formDataObject;
}

export default convertFormDataToJson;
