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