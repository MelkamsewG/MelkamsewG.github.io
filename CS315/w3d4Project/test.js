var submit = function() {
    window.localStorage.name = document.getElementById('Name').value;

    // Save all the other fields
    // You either return a non-false value here and let the form submit
    // Or you return false and do a window.location change 
};

window.onload = function() {
    let form = document.getElementById('TheForm');

    const btnSubmit = () => {
        window.location.href = "http://www.google.com";
    }
    btnSubmit()
}