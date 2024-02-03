function showPage(pageId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}

