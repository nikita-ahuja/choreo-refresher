// var pages = ["bachata-footwork-1.html", ]

function goToNewPage()
        {
            var url = document.getElementById('list').value;
            if(url != 'none') {
                window.location = url;
            }
        }


