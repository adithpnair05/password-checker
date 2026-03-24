function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (password.length === 0) {
        strengthText.textContent = "";
    } else if (strength <= 1) {
        strengthText.textContent = "Weak ❌";
        strengthText.style.color = "red";
    } else if (strength === 2 || strength === 3) {
        strengthText.textContent = "Medium ⚠️";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strong ✅";
        strengthText.style.color = "green";
    }
}