export default function validateName(evt) {
  const keyCode = evt.keyCode ? evt.keyCode : evt.which;
  if (keyCode > 47 && keyCode < 58) {
    evt.preventDefault();
  }
}
