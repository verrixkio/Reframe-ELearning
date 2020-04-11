class CreateReadingCompletions < ActiveRecord::Migration[5.2]
  def change
    create_table :reading_completions do |t|
      t.references :segment
      t.references :reading
      t.timestamps
    end
  end
end
