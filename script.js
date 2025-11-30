const canvas = document.getElementById('thunderCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function drawThunder() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
        for (let i = 0; i < 3; i++) {
            let x = random(0, canvas.width);
            let y = random(0, canvas.height / 2);

            ctx.strokeStyle = 'rgba(168, 255, 96, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y);

            for (let j = 0; j < 10; j++) {
                x += random(-30, 30);
                y += random(10, 30);
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
    }
    requestAnimationFrame(drawThunder);
}
drawThunder();

const realUser = "Cyril";
const realPass = "12345";

let savedUser = "";
let savedPass = "";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const portfolio = document.getElementById("portfolio");
const logoutBtn = document.getElementById("logoutBtn");

function fbLogin() {
    alert("Facebook login simulated!");
    loginForm.style.display = "none";
    portfolio.style.display = "block";
    logoutBtn.style.display = "block";
}

function googleLogin() {
    alert("Google login simulated!");
    loginForm.style.display = "none";
    portfolio.style.display = "block";
    logoutBtn.style.display = "block";
}

document.getElementById("showSignup").onclick = () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
};

document.getElementById("backToLogin").onclick = () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
};

document.getElementById("forgotPass").onclick = () => {
    alert("Real Account:\nUsername: Cyril\nPassword: 12345");
};

document.getElementById("createBtn").onclick = () => {
    savedUser = document.getElementById("newUser").value.trim();
    savedPass = document.getElementById("newPass").value.trim();

    if (!savedUser || !savedPass) {
        alert("Please fill out all fields!");
        return;
    }

    alert("Account Created! You can now login.");

    signupForm.style.display = "none";
    loginForm.style.display = "block";
};

document.getElementById("loginBtn").onclick = () => {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    if (
        (user === realUser && pass === realPass) ||
        (user === savedUser && pass === savedPass)
    ) {
        loginForm.style.display = "none";
        portfolio.style.display = "block";
        logoutBtn.style.display = "block";
    } else {
        alert("Incorrect username or password!");
    }
};

logoutBtn.onclick = () => {
    portfolio.style.display = "none";
    loginForm.style.display = "block";
    logoutBtn.style.display = "none";
};