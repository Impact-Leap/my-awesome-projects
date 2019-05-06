const guideList = document.querySelector('.guides');

// setup guides
const setupGuides = (data) => {

  let html = '';
  if (data.length) {
    data.forEach(doc => {
      const guide = doc.data();
      // console.log(guide);
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">${guide.title}</div>
          <div class="collapsible-body white">${guide.content}</div>
        </li>
      `
      html += li;
    });
  }
  else {
    html = `<h5 class="center-align">Login to view guides</h5>`;
  }

  guideList.innerHTML = html;
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});