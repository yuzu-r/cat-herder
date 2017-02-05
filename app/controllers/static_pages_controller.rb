class StaticPagesController < ApplicationController
  before_action :authenticate_user!, only: [:add_to_location, :remove_from_location]
  def about
    render component: 'About', props: {current_user: current_user}
  end

  def search
    location = params[:location]
    locations = Location.get_locations(location)
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
      params.require(:attendance).permit(:yelp_id)
    end
  
end


    # things we want to return:
    # response.businesses[0].name, image_url, review_count, rating, rating_img_url_small,
    # snippet_text, snippet_image_url, location, location.display_address
    # location.coordinate.latitude, location.coordinate.longitude,
    #
=begin
irb(main):003:0> yb=y.businesses
=> [#<Yelp::Response::Model::Business:0x007f5b2e412e00 @is_claimed=false, 
@rating=4.0, 
@mobile_url="https://m.yelp.com/biz/buchanan-dog-beach-berkeley?adjust_creative=SBsPmGWAC8X2xE7N85ahZQ&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=SBsPmGWAC8X2xE7N85ahZQ", 
@rating_img_url="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", 
@review_count=36, 
@name="Buchanan Dog Beach", 
@rating_img_url_small="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", 
@url="https://www.yelp.com/biz/buchanan-dog-beach-berkeley?adjust_creative=SBsPmGWAC8X2xE7N85ahZQ&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=SBsPmGWAC8X2xE7N85ahZQ", 
@categories=[["Beaches", "beaches"], ["Dog Parks", "dog_parks"]], 
@snippet_text="Great place to let your dog off the leash. Although there were quite few trash cans, the beach was clean from trash. The little hike next to the beach was a...", 
@image_url="https://s3-media3.fl.yelpcdn.com/bphoto/RUxvTGif9nNoGHZqleClVw/ms.jpg", 
@snippet_image_url="https://s3-media3.fl.yelpcdn.com/photo/UtJtJeGqImru66xsOyRQ6w/ms.jpg", 
@rating_img_url_large="https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", 
@id="buchanan-dog-beach-berkeley", @is_closed=false, 
@location=#<Yelp::Response::Model::Location:0x007f5b2e412950 @city="Berkeley", 
@display_address=["24 Buchanan St Exd", "Berkeley, CA 94701"], 
@geo_accuracy=9.5, 
@postal_code="94701", 
@country_code="US",
 @address=["24 Buchanan St Exd"], 
@coordinate=#<Yelp::Response::Model::Coordinate:0x007f5b2e412720 @latitude=37.88876136513, @longitude=-122.316313683987>, @state_code="CA">, @deals=nil, @gift_certificates=nil, @reviews=nil>, 
#<Yelp::Response::Model::Business:0x007f5b2e412658 @is_claimed=true, @rating=5.0
=end
