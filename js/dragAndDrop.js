// let uploadButton = document.getElementById("upload-button");
//     chosenImage  = document.getElementById("chosen-image");
//     fileName     = document.getElementById("file-name");
//     container    = document.querySelector(".container");
//     error        = document.getElementById("error");
//     pdfDisplay   = document.getElementById("pdf-display");
//     inputText    = document.getElementById("inputText");

// const fileHandler = (file, name, type) => {
//   if (type.split("/")[1] !== "pdf") {
//     //File Type Error
//     error.innerText = "Please upload a pdf file";
//     return false;
//   }
//   error.innerText = "";
//   let reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onloadend = () => {
//     //image and file name
//     let pdfContainer = document.createElement("figure");
//     let pdf = document.createElement("pdf");
//     pdf.src = reader.result;
//     pdfContainer.appendChild(pdf);
//     pdfContainer.innerHTML += `<figcaption>${name}</figcaption>`;
//     pdfDisplay.appendChild(pdfContainer);
//   };
// };

// //Upload Button
// pdfDisplay.addEventListener("change", () => {
//   imageDisplay.innerHTML = "";
//   Array.from(uploadButton.files).forEach((file) => {
//     fileHandler(file, file.name, file.type);
//   });
// });

// container.addEventListener("dragenter", (e) => 
//     {
//         e.preventDefault();
//         e.stopPropagation();
//         container.classList.add("active");
//     },false);

// container.addEventListener("dragleave", (e) => 
//     {
//         e.preventDefault();
//         e.stopPropagation();
//         container.classList.remove("active");
//     }, false);
  
// container.addEventListener("dragover", (e) => 
//     {
//         e.preventDefault();
//         e.stopPropagation();
//         container.classList.add("active");
//     }, false);


// let fileContainer = file
// container.addEventListener("drop", (e) => 
//     {
//         e.preventDefault();
//         e.stopPropagation();
//         container.classList.remove("active");
//         let draggedData = e.dataTransfer;
//         let files = draggedData.files;
//         pdfDisplay.innerHTML = "";
//         Array.from(files).forEach((file) => {
//             fileHandler(file, file.name, file.type);
//         });
//     },false);


// window.onload = () => {
//   error.innerText = "";
// };

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "jorgetejadolopez@gmail.com",
        Password: "8ABCC2CA6A66023ADB089791A021891A518D",
        To: "jtejado@pendulostudios.com",
        From: "jorgetejadolopez@gmail.com",
        Subject: "Sending Email using javascript",
        Body: inputText.innerText,
        // Attachments: [
        // {
        //     name: "File_Name_with_Extension",
        //     path: "asdasd"
        // }],
        }).then(function (message) {
            alert("mail sent successfully")
        })
}