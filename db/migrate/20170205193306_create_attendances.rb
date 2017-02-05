class CreateAttendances < ActiveRecord::Migration
  def change
    create_table :attendances do |t|
      t.string :yelp_id, null: false
      t.integer :guest_count, :default => 0
      t.timestamps null: false
    end
    add_index :attendances, :yelp_id, unique: true
  end

end
