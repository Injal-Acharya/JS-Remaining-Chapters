// Callback function and Handling errors

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    
    script.onload = () => callback(null, script);
    script.onerror =  () => callback(new Error("Src got some error"));
    document.body.appendChild(script);
}

callback = (error, script) => {
    if (error) {
        console.log(error);
        return;
    }

    alert('Hello World');
    alert(script.src);
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', callback);
