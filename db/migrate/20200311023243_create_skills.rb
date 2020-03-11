class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.string :name
      t.references :segment
      t.references :reading
      t.references :activity
      t.timestamps
    end
  end
end
