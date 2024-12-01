// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const hiddenContent = document.querySelector(".hidden-content");

    toggleBtn.addEventListener("click", function () {
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "inline"; // Hiển thị nội dung ẩn
            toggleBtn.textContent = "Xem bớt"; // Đổi nút thành "Xem bớt"
        } else {
            hiddenContent.style.display = "none"; // Ẩn nội dung
            toggleBtn.textContent = "Xem thêm"; // Đổi nút lại thành "Xem thêm"
        }
    });
});
