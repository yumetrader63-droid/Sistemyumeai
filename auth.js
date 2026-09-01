const SESSION_KEY = "yume_session_role"; // Menampung: "member", "admin", atau null

// Fungsi Cek Akses Member
function protectMemberPage() {
  const role = sessionStorage.getItem(SESSION_KEY);
  if (!role || (role !== "member" && role !== "admin")) {
    alert("Akses ditolak! Silakan login terlebih dahulu.");
    window.location.href = "index.html";
  }
}

// Fungsi Cek Akses Admin
function protectAdminPage() {
  const role = sessionStorage.getItem(SESSION_KEY);
  if (role !== "admin") {
    alert("Akses Khusus Admin!");
    window.location.href = "index.html";
  }
}

// Fungsi Logout
function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.href = "index.html";
}

