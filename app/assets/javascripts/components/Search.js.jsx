var Search = React.createClass({
  render: function() {
    return(
      <div className='img-container'>
        <h2 className='search-title'>Wanna play?</h2>
        <h5 className='search-subtitle'>Find dog parks.</h5>
        <h5 className='search-subtitle'>Round up your fellow owners.</h5>
        <div className='input-group search-group'>
          <div className='input-group-btn'>
            <button 
                id='search-btn'
                className='btn btn-primary'
                onClick={this.props.onSearchLocation}
                disabled={!this.props.validLocation}>
                Find Dog Parks Near
            </button>
          </div>
          <input placeholder='enter location, e.g. city/state or postal code' 
                  value={this.props.location}
                  onChange={this.props.onLocationEntry}
                  className='form-control'>
          </input>
        </div>
      </div>
    )
  }
})