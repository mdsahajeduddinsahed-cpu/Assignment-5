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
// --- Load Data ---
async function loadData() {
    try {
        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const json = await res.json();
        allData = json.data;
        renderCards(allData);
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// --- Rendering Card ---
function renderCards(issues) {
    const container = document.getElementById("issueContainer");
    container.innerHTML = "";

    issues.forEach(issue => {
        // Dynamic Border Class
        const border = issue.status === "open" 
            ? "border-t-4 border-green-500" 
            : "border-t-4 border-purple-500";

        // Dynamic Priority Styles
        const priorityColor = issue.priority === "high" 
            ? "bg-red-100 text-red-500" 
            : issue.priority === "medium" 
                ? "bg-orange-100 text-orange-500" 
                : "bg-gray-200 text-gray-500";

        // Labels Generation
        const labels = issue.labels.map(label => {
            if (label === "bug") {
                return `<span class="px-3 py-1 border border-red-400 text-red-500 bg-red-50 rounded-full text-xs"><i class="fa-solid fa-bug"></i> BUG</span>`;
            }
            if (label === "help wanted") {
                return `<span class="px-3 py-1 border border-yellow-400 text-yellow-600 bg-yellow-50 rounded-full text-xs"><i class="fa-solid fa-life-ring"></i> HELP WANTED</span>`;
            }
            if (label === "enhancement") {
                return `<span class="px-3 py-1 border border-green-400 text-green-600 bg-green-50 rounded-full text-xs">ENHANCEMENT</span>`;
            }
            return "";
        }).join("");