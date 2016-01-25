function Place (city, state, landmarks, season, notes){
  this.location = [city, state];
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Place.prototype.locationName = function () {
  return this.location[0] + ", " + this.location[1];
}


$(function(){
  $('form#new-place').submit(function(event){

    var userCity = $('#new-city').val();
    var userState = $('#new-state').val();
    var userLandmarks = $('#new-landmarks').val();
    var userSeason = $('#new-season').val();
    var userNotes = $('#new-notes').val();

    var visitedPlace = new Place (userCity, userState, userLandmarks, userSeason, userNotes);

    $('ul#places-list').append("<li><span class='location'>"+visitedPlace.locationName()+"</span></li>");

    event.preventDefault();

  $('.location').last().click(function() {
    $('#show-place').show();
    $('#location').text(visitedPlace.locationName());
    $('#landmarks').text(visitedPlace.landmarks);
    $('#season').text(visitedPlace.season);
    $('#notes').text(visitedPlace.notes);
  });
});
});
