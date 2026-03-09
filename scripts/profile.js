addNav('auth')
addFoot()
editeHeartCart()

// نجيب اليوزر من localStorage

// let users = JSON.parse(localStorage.getItem("users")) || [];
// let userId = JSON.parse(localStorage.getItem("userId")) || [];

if (!user) {
    // لو مفيش يوزر مسجل دخوله
    window.location.href = "auth.html";
}

// user=users.find(u=>u.id==userId)

console.log(user);


// نحط البيانات في الصفحة
document.getElementById("userName").innerText = user.name;
document.getElementById("userEmail").innerText = user.email;
document.getElementById("userPhone").innerText = user.phne;
document.getElementById("userOrders").innerText += user.orders.length;


// تعديل البيانات
function editProfile() {
    let newName = prompt("Enter new name:", currentUser.name);

    if (newName && newName.trim() !== "") {
        currentUser.name = newName.trim();
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        document.getElementById("userName").innerText = currentUser.name;
        alert("Name updated successfully!");
    }
}


// تسجيل خروج
function logout() {
    localStorage.removeItem("userId");
    window.location.href = "auth.html";
}