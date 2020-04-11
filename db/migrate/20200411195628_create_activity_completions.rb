class CreateActivityCompletions < ActiveRecord::Migration[5.2]
  def change
    create_table :activity_completions do |t|
      t.references :segment
      t.references :activity
      t.timestamps
    end
  end
end
