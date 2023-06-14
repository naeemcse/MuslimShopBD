

// Select Categories  start 
 
function redirectToLink(selectElement) {
    var selectedValue = selectElement.value;
    var link;

    switch (selectedValue) {
        case '0':
        link = 'index.html';
        break;
      case '1':
        link = 'dress.html';
        break;
      case '2':
        link = 'book.html';
        break;
      case '3':
        link = 'accesories.html';
        break;
      case '4':
        link = 'food.html';
        break;
      default:
        link = '#'; // Default link if no option is selected
    }

    if (link !== '#') {
      window.location.href = link; // Redirect to the selected link
    }
  }

  // Select Categorirs End 


  
