var About = React.createClass({
  render: function(){
    return (
      <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3'>
        <div className='about-img-container'></div>
        <h4>What is Dogs with Friends?</h4>
        <p>Dogs with Friends helps coordinate the activities of dogs and their owners.</p>
        <ul>
          <li>Search for dog parks in a specified area, city or postal code. DwF uses the powerful Yelp API for this search. (No login required.)</li>
          <li>Users who are logged in can mark (or cancel) if they are planning to go to any of the dog parks returned by the search.</li>
          <li>Users who are logged in can easily see how many other dogs are planning to be at the dog parks in their area.</li>
        </ul>
        <h4>It says there are no results found, but I know there is a dog park there!</h4>
        <p>Make sure the location in question is marked in Yelp as a dog park, 
          not just an ordinary park. To maximize the useful results, DwF only searches 
          Yelp for places specifically designated as dog parks.</p>
        <h4>About Dogs With Friends</h4>
        <p>DwF uses Rails and React.js (via react-rails).</p>
        <p>This is a <a href='http://www.freecodecamp.com' target='_blank'>freeCodeCamp</a> project built by <a href='https://s.codepen.io/yuzu-r/debug/KMWNOo/bYrdyYxogGKA' target='_blank'>yuzu-r</a>.</p>
      </div>      
    )
  }
})