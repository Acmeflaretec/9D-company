const scriptURL = 'https://script.google.com/macros/s/AKfycbzIEd2USORsirt3i2oCeLFGFPXxZT-GK7vwZcsUH15NmkeXSj4eEx8jKBGW3LjZNSZO/exec'

const form = document.forms['contact-form']
const submitButton = document.querySelector('button[type="submit"]');


form.addEventListener('submit', e => {
 e.preventDefault()
 submitButton.disabled = true;
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})