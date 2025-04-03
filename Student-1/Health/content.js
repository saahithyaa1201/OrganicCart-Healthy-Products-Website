function showExplanation(id) {
    var explanations = document.querySelectorAll('.explanation');
    explanations.forEach(function(explanation) {
        explanation.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
