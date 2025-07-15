const formData = { 
    email: "",
     message: "" ,};

     const KEY = "feedback-form-state";

     const form = document.querySelector(".feedback-form");
     form.addEventListener("input", (event) =>{

        const {name, value} = event.target;
        formData[name] = value;

            
        localStorage.setItem(KEY, JSON.stringify(formData));
     })
const getFromForm = (KEY) => {
   const savedData = localStorage.getItem(KEY);

   if(savedData) {
      const parsedData = JSON.parse(savedData)
       formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
   
   }
   
}
getFromForm(KEY);

form.addEventListener("submit", (event) => {

   event.preventDefault();

   if (!formData.email.trim() || !formData.message.trim()) {
      alert `«Fill please all fields»`;
      return;
   }
   console.log(formData);

    localStorage.removeItem(KEY);

    formData.email = "";
  formData.message = "";

    form.reset();
   
})