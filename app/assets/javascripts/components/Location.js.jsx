var Location = React.createClass({
  getInitialState: function(){
    return (
      {
        showAttendance: false,
        guestCount: this.props.locationData.guest_count,
        userGoing: this.props.locationData.user_going
      }
    )
  },
  handleAdd: function(){
    console.log('adding to guest count');
    var self = this;
    $.ajax({
        url: '/add',
        type: 'POST',
        data: {
          yelp_id: this.props.locationData.yelp_id
        },
        success: function(response){
          //console.log('success!', response);
          var newCount = self.state.guestCount + 1;
          self.setState(
            {guestCount: newCount,
             userGoing: true}
          );          
        },
        error: function(response){
          console.log('error!', response.responseText);
        }
    })
  },
  handleRemove: function(){
    console.log('removing from guest count');
    var self = this;
    $.ajax({
        url: '/remove',
        type: 'POST',
        data: {
          yelp_id: this.props.locationData.yelp_id
        },
        success: function(response){
          console.log('success!', response);
          var newCount = self.state.guestCount - 1;
          self.setState(
            {guestCount: newCount,
             userGoing: false
            }
          );
        },
        error: function(response){
          console.log('error!', response.responseText);
        }
    })
  },
  render: function(){
    //console.log(this.props);
    var attendance = null;
    if (this.props.isLoggedIn) {
      attendance = <Attendance guestCount={this.state.guestCount}
                               handleAdd={this.handleAdd}
                               handleRemove={this.handleRemove}
                               userGoing={this.state.userGoing} />
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