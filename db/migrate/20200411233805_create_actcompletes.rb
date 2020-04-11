class CreateActcompletes < ActiveRecord::Migration[5.2]
  def change
    create_table :actcompletes do |t|
      t.references :segment
      t.references :activity
      t.references :user

      t.timestamps
    end
  end
end
