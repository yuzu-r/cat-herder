class ChangeAttendance < ActiveRecord::Migration
  def change
    remove_column :attendances, :yelp_id
    add_column :attendances, :location_id, :integer
  end
end
