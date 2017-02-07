class LocationsController < ApplicationController
  before_action :authenticate_user!, only: [:add_to_location, :remove_from_location]
  def main   
    location_string = session[:location_string]
    session[:location_string] = nil
    render component: 'Main', props: {current_user: current_user, storedLocationString: location_string }
  end

  def search
    if current_user.nil?
      # store the search for later
      session[:location_string] = params[:location]
    end
    location = params[:location]
    locations = Location.get_locations(location, current_user) 
    # we might not have current_user, so pass this way instead of passing id
    render json: {:search_result => locations, status: :success}
  end

  def add_to_location
    yelp_id = attendance_params[:yelp_id]
    response = Attendance.add_one(yelp_id, current_user.id)
    if response
      render json: {:guest_count => response, status: :success}
    else
      render json: {:guest_count => response, status: :error}
    end
  end

  def remove_from_location
    yelp_id = attendance_params[:yelp_id]
    response = Attendance.minus_one(yelp_id, current_user.id)
    if response
      render json: {:guest_count => response, status: :success}
    else
      render json: {:guest_count => response, status: :error}
    end
  end
    
  private
    def attendance_params
      params.permit(:yelp_id)
    end
  
end
