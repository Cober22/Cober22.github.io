let uploadButton = document.getElementById("upload-button");
    chosenImage  = document.getElementById("chosen-image");
    fileName     = document.getElementById("file-name");
    containerPDF = document.querySelector(".containerPDF");
    error        = document.getElementById("error");
    pdfDisplay   = document.getElementById("pdf-display");
    // inputText    = document.getElementById("inputText");

var reader = new FileReader();
var fileContainer

const fileHandler = (file, name, type) => {
    if (type.split("/")[1] !== "pdf") {
        //File Type Error
        error.innerText = "Please upload a pdf file";
        return false;
    }
    error.innerText = "";
    reader.readAsBinaryString(file);
    fileContainer = file
    console.log("ENTER")
    reader.onloadend = () => {
        //image and file name
        let pdfContainer = document.createElement("figure");
        let pdf = document.createElement("img");
        pdf.src = reader.result;
        pdfContainer.appendChild(pdf);
        pdfContainer.innerHTML += `<figcaption>${name}</figcaption>`;
        pdfDisplay.appendChild(pdfContainer);
    };
};

// Upload Button
containerPDF.addEventListener("change", (e) => {
    e.preventDefault();
    e.stopPropagation();
    pdfDisplay.innerHTML = "";
    files = uploadButton.files
    Array.from(files).forEach((file) => {
        fileHandler(file, file.name, file.type);
    });
});

containerPDF.addEventListener("dragenter", (e) => 
    {
        e.preventDefault();
        e.stopPropagation();
        containerPDF.classList.add("active");
    },false);

containerPDF.addEventListener("dragleave", (e) => 
    {
        e.preventDefault();
        e.stopPropagation();
        containerPDF.classList.remove("active");
    }, false);
  
containerPDF.addEventListener("dragover", (e) => 
    {
        e.preventDefault();
        e.stopPropagation();
        containerPDF.classList.add("active");
    }, false);


containerPDF.addEventListener("drop", (e) => 
    {
        e.preventDefault();
        e.stopPropagation();
        containerPDF.classList.remove("active");
        let draggedData = e.dataTransfer;
        let files = draggedData.files;
        pdfDisplay.innerHTML = "";
        Array.from(files).forEach((file) => {
            fileHandler(file, file.name, file.type);
        });
    },false);


window.onload = () => {
    error.innerText = "";
};
