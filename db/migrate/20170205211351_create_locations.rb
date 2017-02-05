class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :yelp_id, null: false
      t.timestamps null: false
    end
    add_index :locations, :yelp_id, unique: true
    add_column :attendances, :user_id, :integer
    remove_column :attendances, :guest_count
    remove_index :attendances, :yelp_id
  end
end
