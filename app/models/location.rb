class Location < ActiveRecord::Base
  has_many :attendances

  validates :yelp_id, presence: true

  def self.get_locations(location, user)
    search_params = { term: 'dog park', limit: 12, category_filter: 'dog_parks' }
    full_responses = Yelp.client.search(location, search_params)
    full_businesses = full_responses.businesses
    selected_responses = []
    full_businesses.each do |r|
      selected_response = {}
      selected_response[:yelp_id] = r.id
      selected_response[:name] = r.name
      selected_response[:image_url] = r.image_url
      selected_response[:rating] = r.rating
      selected_response[:review_count] = r.review_count
      selected_response[:snippet_text] = r.snippet_text
      selected_response[:address] = r.location.display_address
      selected_response[:yelp_url] = r.url
      selected_response[:guest_count] = count_for(r.id)
      selected_response[:user_going] = is_user_going?(r.id, user)
      selected_responses.push(selected_response)
    end
    return selected_responses
  end

  def self.count_for(yelp_id)
    location = Location.find_by(yelp_id: yelp_id)
    if location
      return location.attendances.count
    else
      return 0
    end    
  end

  def self.is_user_going?(yelp_id, user)
    if user
      location = Location.find_by(yelp_id: yelp_id)
      if location
        return location.attendances.exists?(user_id: user.id)
      else
        false
      end
    else
      return false
    end
  end

end
