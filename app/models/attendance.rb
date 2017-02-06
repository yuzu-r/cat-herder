class Attendance < ActiveRecord::Base
  validates :location_id, presence: true
  belongs_to :location
  belongs_to :user


  def self.add_one(yelp_id, user_id)
    location = Location.find_by(yelp_id: yelp_id)
    if location
      attendance = Attendance.create(location_id: location.id, user_id: user_id)
      if attendance.valid?
        return location.attendances.count
      else 
        return nil
      end
    else
      location = Location.create(yelp_id: yelp_id)
      attendance = Attendance.create(location_id: location.id, user_id: user_id)
      if attendance.valid?
        return 1
      else
        return nil
      end
    end
  end

  def self.minus_one(yelp_id, user_id)
    location = Location.find_by(yelp_id: yelp_id)
    if location
      Attendance.find_by(location_id: location.id, user_id: user_id).destroy
      return location.attendances.count
    else
      return nil
    end
  end

end
