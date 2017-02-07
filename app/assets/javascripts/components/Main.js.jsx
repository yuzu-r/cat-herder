var Main=React.createClass({
  getInitialState: function() {
    return (
      {
        locationString: '',
        validLocation: false,
        locations: [],
        notice: ''
      }
    )
  },
  componentDidMount: function(){
    if (this.props.storedLocationString){
      this.setState(
        {
          locationString: this.props.storedLocationString,
          validLocation: true
        },
        this.handleSearchLocation);
    }     
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
          if (response.status === 'success'){
            if (response.search_result.length>0){
              var notice = '';
            }
            else {
              notice = 'No results found for this location.'
            }
            self.setState(
              {
                locations: response.search_result,
                notice: notice
              }
            )
          }
          else {
            console.log('there was an error in the search request:', response.search_result);
          }
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
    else {
      locations = <span>{this.state.notice}</span>
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