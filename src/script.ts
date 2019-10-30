const testElement = document.getElementById("testElement");
testElement && testElement.addEventListener('click', () => {
    testElement.innerText = 'Test Success!';
});