document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".downloadBtn");
    
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah navigasi default
            
            const resumePath = "./CV.pdf"; // Pastikan path benar
            const link = document.createElement("a");
            link.href = resumePath;
            link.download = "Thymoti_Siregar_CV.pdf"; // Nama file yang diunduh
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
