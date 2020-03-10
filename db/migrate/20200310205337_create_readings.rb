class CreateReadings < ActiveRecord::Migration[5.2]
  def change
    create_table :readings do |t|
      t.string :title
      t.integer :time
      t.string :intro_title
      t.text :intro_desc
      t.references :segment
      t.timestamps
    end
  end
end
