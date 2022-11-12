const form = document.getElementById('form');
function retrieveFormValue(event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]');
    const values = name.value;
    console.log(values)
}
form.addEventListener('submit', retrieveFormValue);