class CreateReadcompletes < ActiveRecord::Migration[5.2]
  def change
    create_table :readcompletes do |t|
      t.references :segment
      t.references :reading
      t.references :user

      t.timestamps
    end
  end
end
