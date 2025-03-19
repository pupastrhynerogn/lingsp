document.addEventListener("DOMContentLoaded", function () {
    fetch("http://ip-api.com/json/")
        .then(response => response.json())
        .then(data => {
            if (data.countryCode === "HK") {
                window.location.href = "hk-page.html";
            } else {
                window.location.href = "other-page.html";
            }
        })
        .catch(() => {
            window.location.href = "other-page.html"; // 失敗時默認跳轉
        });
});