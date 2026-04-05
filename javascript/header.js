let headerSec = document.createElement("header")

headerSec.innerHTML = `
    <div class="headlogo">
        <a href="../html/homepage.html">
            <img src="../media/logo.png" alt="Logo">
            <p>Minimal <span>Shop</span>ping</p>
        </a>
    </div>
    <div>
        <i class="fa-solid fa-user"></i>
    </div>`;


window.addEventListener("load", function(){
    this.document.head.insertAdjacentHTML("beforeend",`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="../css/homestyle.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">`);
        
    document.body.prepend(headerSec);

    document.body.classList.remove("loading");

})
let protitle = document.getElementById("produ");

