function verifyWord() {
    let textBig = '';
    let text = document.getElementById('word').value;

    text.split(" ").map(item => {
        if (item.trim().length > textBig.length) {
            textBig = item.trim();
            document.getElementById('bigWord').innerHTML = item.trim();
        }
    });
}