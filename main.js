function downloadFile(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById("download-btn").addEventListener('click', function() {
    downloadFile('files/resume.pdf', 'resume.pdf');
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();

      Swal.fire({
        title: "Thank you!",
        text: "Your message has been sent. Redirecting to homepage...",
        icon: "success",
        confirmButtonText: "Okay",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });

      setTimeout(() => {
        window.location.href = "#home"; // or "/" to redirect to homepage
      }, 3000);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "There was a problem submitting your form. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay"
      });
    }
  });
});
