const side_nav = document.querySelectorAll('.sidenav');
M.Sidenav.init(side_nav, {});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});
  });
