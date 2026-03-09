let allData = [];
// Login Verification Function
function handleLogin() {
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;

            if(u === 'admin' && p === 'admin123') {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'main.html';
            } else {
                alert("Wrong username or password");
                document.getElementById('error').classList.remove('hidden');
            }
        }