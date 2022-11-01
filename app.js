function goToNewPage()
        {
            var url = document.getElementById('list').value;
            if(url != 'none') {
                window.location = url;
            }
        }


var html = '<ul>\
        <li>\
          <a href="#">Home</a>\
        </li>\
        <li>\
          <a href="#">Bachata</a>\
        </li>\
        <li>\
          <a href="#">Zouk</a>\
        </li>\
      </ul>';

document.getElementById('nav').innerHTML = html;