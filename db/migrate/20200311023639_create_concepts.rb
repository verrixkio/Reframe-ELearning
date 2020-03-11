class CreateConcepts < ActiveRecord::Migration[5.2]
  def change
    create_table :concepts do |t|
      t.string :title
      t.text :content
      t.references :reading
      t.references :skill
      t.timestamps
    end
  end
end
