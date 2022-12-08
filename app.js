function goToNewPage()
        {
            var url = document.getElementById('list').value;
            if(url != 'none') {
                window.location = url;
            }
        }


var html = '<ul>\
        <li>\
          <a href="home.html">Home</a>\
        </li>\
        <li>\
          <a href="bachata.html">Bachata</a>\
        </li>\
        <li>\
        <a href="salsa.html">Salsa</a>\
      </li>\
        <li>\
          <a href="zouk.html">Zouk</a>\
        </li>\
        <li>\
        <a href="ballet.html">Ballet</a>\
      </li>\
      </ul>';

document.getElementById('nav').innerHTML = html;