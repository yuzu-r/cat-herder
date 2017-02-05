var Attendance = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.guestCount} paw print going
        <button className='btn btn-link'>add me to the list!</button>
      </span>
    )
  }
})