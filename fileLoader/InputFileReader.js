let inputFileReader = (id) => {
    //alert("Entered " + id);

    // Read value if any
    const data = document.getElementById(id);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
        console.log(e.target.result);
    };

    const fileContent = fileReader.readAsText(data.files[0]);
    console.log(fileContent);
};
