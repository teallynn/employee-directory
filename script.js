function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    console.log(data.results);
    let galleryHTML = '<ul class="directory">';
    $.each(data.results, function(i, employee) {
        let firstName = capitalize(employee.name.first);
        let lastName = capitalize(employee.name.last);
        let city = capitalize(employee.location.city);
        galleryHTML += '<li id="' + i + '">';
        galleryHTML += '<a><img src="' + employee.picture.large + '"></a>';
        galleryHTML += '<p class="name"><strong>' + firstName;
        galleryHTML += ' ';
        galleryHTML += lastName + '</strong><br>';
        galleryHTML += employee.email + '<br>';
        galleryHTML += city + '</p></li>';
    }); //end .each
    galleryHTML += '</ul>'
    $('.employee-directory').html(galleryHTML);
  } //end success property
}); //end .ajax


/*
employee.name.first
employee.name.last
employee.picture.thumbnail
employee.location.city
employee.email

employee.picture.medium
employee.login.username
employee.cell
employee.location.street
employee.location.state
employee.dob
*/
