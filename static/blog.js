'use strict';

var submit = function submit (e) {
  var email = document.getElementById('jsMailingEmail').value;
  var hidden = document.getElementById('jsMailingHidden').value;

  if (email.length === 0 || !/\S+@\S+\.\S+/.test(email)) {
    e.target.innerHTML = 'Invalid email';
    return;
  }

  e.target.innerHTML = 'Sending';

  window.fetch('//laurenashpole.com/mailing/signup', {
    body: JSON.stringify({
      email: email,
      b_5e9c643a20b49926773037101_a878f779fc: hidden
    })
  }, function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  }).then(function () {
    e.target.innerHTML = 'Success!';
  }).catch(function (err) {
    e.target.innerHTML = err;
  });
};

var init = function init() {
  var btn = document.getElementById('jsMailingButton');
  btn.addEventListener('click', submit, false);
};

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
}