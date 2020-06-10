let data = {
    photo: ['Ohana.jpg', "Ohana2.jpg", "Cabin.jpg", "Galley.jpg", "Ocean view.jpg"],
    title: ['Ohana'],
    description: ['This was the sailing yacht which brought me from Europe to the Caribbean Islands'],
  };
  
  $('#photo').attr('src', data.photo);
  $('#photo-title').text(data.title);
  $('#photo-description').text(data.description);

  var currentPhoto = 0; 
  var currentPhotoTitel = 0;
  var currentPhotoDescription = 0;

// Create an array of those objects for each photo you have in the images folder
// Create variable (eg. currentPhoto) to store the number of photo that is displayed from the array (at first it can be 0)
// Instead of loading the data from the single object, use the currentPhototh element of the array


$('#photo').attr('src', mainpic[currentPhoto].photo);


let loadPhoto = (photoNumber) => {

  $('#mainpic').attr('src', data.photo[currentPhoto]);
  $('#mainpic').css('border', 'solid 2px white');
  $('#mainpic').css('box-shadow', '0 0 50px #fff');
  $('#currentPhotoTitel').text(data.title[currentPhotoTitel]);
  $('#currentPhotoDescription').text(data.description[currentPhotoDescription]);