var Search = React.createClass({
  render: function() {
    return(
      <div className='input-group'>
        <input placeholder='enter location, e.g. city/state or postal code' 
                value={this.props.location}
                onChange={this.props.onLocationEntry}
                className='form-control'>
        </input>
        <div className='input-group-btn'>
          <button 
              className='btn btn-primary'
              onClick={this.props.onSearchLocation}
              disabled={!this.props.validLocation}>
              Find Now!
          </button>
        </div>
      </div>
    )
  }
})