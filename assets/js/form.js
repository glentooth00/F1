// Add this function to the F1.deferred array to initialize the form when the app is ready
F1.deferred.push(function initTccsEditPageView(app) { 

    const Ajax = F1.lib.Ajax;
    const Form = F1.lib.Form;
    const Popup = F1.lib.Popup;
    const Utils = F1.lib.Utils;
    const F1SelectField = F1.lib.F1SelectField;
    const F1UploadField = F1.lib.F1UploadField;
  
    // Assuming you have a form element with the ID 'myForm' in your HTML
    const formElement = document.getElementById('myForm');
  
    // Check if the form element exists
    if (formElement) {
      // Create an instance of the Form class
      const myForm = new Form(formElement);
  
      // Call the getFields method
      const fields = myForm.getFields();
  
      // Log the fields to the console
      console.log('Fields:', fields);
  
      // If you need to use the fields for something specific, you can do it here
      // For example, you can iterate over the fields and perform actions
      Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        // Perform actions with the field
        console.log(`Field Name: ${fieldName}`, field);
      });
    } else {
      console.error('Form element with ID "myForm" not found');
    }
  
  });
  