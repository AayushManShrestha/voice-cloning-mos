document.getElementById("mos-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const mosScore = document.getElementById("mos-score").value;
    // You can send the MOS score to a server for further processing here
    console.log("MOS Score submitted: " + mosScore);
    // Optionally, you can provide feedback to the user that the score has been submitted
});
