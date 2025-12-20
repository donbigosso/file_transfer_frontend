export function changeTestResultText(text){
    const testField = document.querySelector('.test-results');
    testField.textContent = text;
}