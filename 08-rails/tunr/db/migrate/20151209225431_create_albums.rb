class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.text :name
      t.text :cover
      t.timestamps null: false
    end
  end
end
