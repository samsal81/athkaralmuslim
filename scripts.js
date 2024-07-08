function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

fetch('navigation.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navigation').innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching navigation.html:', error);
            });

function onClick(element) {
    var clicks = element.innerHTML;
    if (clicks > 0) {
        clicks -= 1;
        element.innerHTML = clicks;
    }
};