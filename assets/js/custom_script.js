var hints = document.getElementsByClassName('hint');
// var profilePicture = document.getElementsByClassName('picture-container')[0];
var introText = document.getElementsByClassName('text-container')[0];
var ageCounter = document.getElementById('age-counter');
// var githubHint = document.getElementsByClassName('small')[0];

setInterval(function () {
  calcAge('1990-10-15');
}, 1000);

document.addEventListener('scroll', function () {
  for (var i = 0; i < hints.length; i++) {
    var hint = hints[i];
    hint.style.opacity = 1 - document.body.scrollTop / 1000 + 0.2 + i;
  }

  // profilePicture.style.opacity = 1 - document.body.scrollTop / 250 + 0.5;
  introText.style.opacity = 1 - document.body.scrollTop / 250 + 0.5;
  // githubHint.style.opacity = document.body.scrollTop / 500 - 4.2;
});

function calcAge(dateString) {
  var birthday = +new Date(dateString);
  ageCounter.innerHTML = ((Date.now() - birthday) / (31557600000)).toFixed(8);
}
