var About=React.createClass({
  getInitialState: function() {
    return (
      {
        locationString: '',
        validLocation: false,
        locations: []
      }
    )
  },
  handleLocationEntry: function(e){
    var locationString = e.target.value;
    var validLocationString = locationString.trim().length > 1 
    this.setState({
      locationString: locationString,
      validLocation: validLocationString
    })
  },
  handleSearchLocation: function(){
    var self = this;
    $.ajax(
      {
        url: '/search',
        type: 'GET',
        data: {
          location: this.state.locationString
        },
        success: function(response){
          //console.log('success!', response);
          self.setState(
            {locations: response.search_result}
          )
        },
        error: function(response){
          console.log('error!', response.responseText);
        }
      }
    )
  },
  render: function() {
    var locations = null;
    if (this.state.locations.length > 0) {
      var isLoggedIn = this.props.current_user !== null;
      locations = this.state.locations.map(function(l, index){
        return(<Location key={index} locationData={l} isLoggedIn={isLoggedIn} />
        )
      });
    }
    return (
      <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
        <Search location={this.state.locationString} 
                onLocationEntry={this.handleLocationEntry}
                onSearchLocation={this.handleSearchLocation}
                validLocation={this.state.validLocation} />
        {locations}
      </div>
    )
  }
})