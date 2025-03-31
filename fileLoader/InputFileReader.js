let inputFileReader = (id) => {
    //alert("Entered " + id);

    // Read value if any
    const data = document.getElementById(id);

    let fileReader = new FileReader();
    const fileContent = fileReader.readAsText(data.files[0]);

    fileReader.onload = (e) => {
        console.log(e.target.result);
    };

    // console.log(fileContent);
};
