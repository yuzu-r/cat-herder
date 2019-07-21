class Attendance extends React.Component{
  render() {
    var includeUserText='';
    if (this.props.userGoing){
      includeUserText = 
      <span>, including you&nbsp;
        <button className='btn btn-danger btn-sm'
                onClick={this.props.handleRemove}>cancel plans</button>
      </span>;
    }
    else {
      includeUserText = <span>&nbsp;
        <button className='btn btn-primary btn-sm'
                onClick={this.props.handleAdd}>I plan to go!</button>
      </span>;
    }
    return (
      <span className='h4'>
        {this.props.guestCount} <i className='fa fa-paw'></i> going{includeUserText}
      </span>
    )
  }
}
