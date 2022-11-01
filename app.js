function goToNewPage()
        {
            var url = document.getElementById('list').value;
            if(url != 'none') {
                window.location = url;
            }
        }

        fetch('nav.html')
        .then(res => res.text())
        .then(text => {
            let oldelem = document.querySelector("script#replace_with_navbar");
            let newelem = document.createElement("div");
            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem,oldelem);
        })
