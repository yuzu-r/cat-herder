var Location = React.createClass({
  getInitialState: function(){
    return (
      {
        showAttendance: false
      }
    )
  },
  render: function(){
    var attendance = null;
    if (this.props.isLoggedIn) {
      attendance = <Attendance guestCount={this.props.locationData.guest_count} />
    }
    else {
      attendance = <span>Log in to see if any good dogs will be here</span>
    }
    if (this.props.locationData.address.length === 0){
      var addressString = '';  
    }
    else {
      addressString = this.props.locationData.address.join(', ');
    }
    return (
      <div>
        <h4>{this.props.locationData.name}<small>&nbsp;&nbsp;{attendance}</small></h4>
        <img className='location-image' src={this.props.locationData.image_url} />
        <p>{addressString}</p>
        <p>{this.props.locationData.rating} out of 5 rating on {this.props.locationData.review_count} reviews.</p>        
        <p>{this.props.locationData.snippet_text} <a href={this.props.locationData.yelp_url} target="_blank">(more on Yelp)</a></p>     
        <div className='clearfix'></div>
      </div>
    )
  }
})