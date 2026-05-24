function check() {
    // Get the names from the input fields
    let name1 = document.getElementById("1name").value;
    let name2 = document.getElementById("2name").value;

    // Validate that both names are entered
    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    // Generate a random love score between 1 and 100
    let LoveScore = Math.floor(Math.random() * 100) + 1;

    // Construct the result text
    let resultText = `Love score between ${name1} and ${name2} is ${LoveScore}%.`;

    // Display the result in the specified element
    let name3 = document.getElementById("name3");
    name3.innerHTML = resultText;
}
