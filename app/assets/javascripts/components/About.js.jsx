var About=React.createClass({
  getInitialState: function() {
    return (
      {
        location: '',
        validLocation: false
      }
    )
  },
  handleLocationEntry: function(e){
    var locationString = e.target.value;
    var validLocationString = locationString.trim().length > 1 
    this.setState({
      location: locationString,
      validLocation: validLocationString
    })
  },
  handleSearchLocation: function(){
    console.log('searching');
    $.ajax(
      {
        url: '/search',
        type: 'GET',
        data: {
          location: 'Hilo'
        },
        success: function(response){
          console.log('success!', response);
        },
        error: function(response){
          console.log('error!', response.responseText);
        }
      }
    )

  },
  render: function() {
    return (
      <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
        <Search location={this.state.location} 
                onLocationEntry={this.handleLocationEntry}
                onSearchLocation={this.handleSearchLocation}
                validLocation={this.state.validLocation} />
      </div>
    )
  }
})