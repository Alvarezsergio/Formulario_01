// @ts-check 

const url = 'https://jsonplaceholder.typicode.com/posts' 
const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const form = document?.querySelector("form")
const select = document?.querySelector("select")


async function handleSubmit(event) {
    event.preventDefault();

    const data = {
        name: event.target["name"].value,
        lastname: event.target["lastname"].value,
        email: event.target["email"].value,
        date: event.target["dateOfBirth"].value,
        country: event.target["country"].value,

    };
    const errors = validate(data)
    if (errors.length) {
        return alert("error en el formulario")
    }


    const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(data), 
    })

    const { id } = await response.json();
    if (id) alert("Formulario exitoso")
    else alert("error")
}

function validate(data) {
    let errors = []
    if (!isNaN(data.name)) {
        errors.push("Error en campo nombre")
    }
    if (!isNaN(data.lastname)) {
        errors.push("Error en campo apellid0")
    }
    return errors;
}

function darkMode() {
    document.body.classList.add("dark");
    document.querySelector("form").classList.add("dark_form");
    inputs.forEach(input => input.classList.add("dark_input"));
    document.querySelector("select").classList.add("dark_input");
    buttons.forEach(button => button.classList.add("dark_btn"));
}

function lightMode() {
    document.body.classList.remove("dark");
    document.querySelector("form").classList.remove("dark_form");
    inputs.forEach(input => input.classList.remove("dark_input"));
    document.querySelector("select").classList.remove("dark_input");
    buttons.forEach(button => button.classList.remove("dark_btn"));
}
