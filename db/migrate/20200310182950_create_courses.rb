class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :name
      t.text :description
      t.string :value_props, array: true, default: []
      t.integer :completion_time
      t.integer :price
    end
  end
end
