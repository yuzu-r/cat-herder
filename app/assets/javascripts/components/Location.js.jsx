class Location extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showAttendance: false,
      guestCount: this.props.locationData.guest_count,
      userGoing: this.props.locationData.user_going    
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleAdd(){
    //console.log('adding to guest count');
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
  }
  handleRemove() {
    //console.log('removing from guest count');
    var self = this;
    $.ajax({
        url: '/remove',
        type: 'POST',
        data: {
          yelp_id: this.props.locationData.yelp_id
        },
        success: function(response){
          //console.log('success!', response);
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
  }
  render(){
    //console.log(this.props);
    var attendance = null;
    if (this.props.isLoggedIn) {
      attendance = <Attendance guestCount={this.state.guestCount}
                               handleAdd={this.handleAdd}
                               handleRemove={this.handleRemove}
                               userGoing={this.state.userGoing} />
    }
    else {
      attendance = <span>Log in to see the paw count for this park</span>
    }
    if (this.props.locationData.address.length === 0){
      var addressString = '';  
    }
    else {
      addressString = this.props.locationData.address.join(', ');
    }
    return (
      <div>
        <div className='row'>
          <div className='col-md-3'>
            <img className='img-responsive' src={this.props.locationData.image_url} />
          </div>
          <div className='col-md-9'>
            <h4>
              {this.props.locationData.name}<small>&nbsp;&nbsp;{attendance}</small>
            </h4>
            <p className='location-text'>{addressString}</p>
            <p>{this.props.locationData.rating} out of 5 rating on {this.props.locationData.review_count} Yelp reviews.</p>        
            <p>{this.props.locationData.snippet_text} <a href={this.props.locationData.yelp_url} target="_blank">(more on Yelp)</a></p>     
          </div>
        </div>
        <hr className='star-style' />
        <div className='clearfix'></div>
      </div>
    )
  }
}
