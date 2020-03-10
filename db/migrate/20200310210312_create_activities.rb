class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :name
      t.integer :time
      t.string :intro_title
      t.text :intro_desc
      t.string :objective
      t.text :objective_desc
      t.string :instruction_title
      t.text :instruction_desc
      # https://stackoverflow.com/questions/56288026/rails-migration-to-add-a-column-of-type-array-of-objects
      t.references :segment
      t.timestamps
    end
  end
end
