class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :name
      t.integer :album_id
      t.integer :artist_id
      t.text :file
      t.timestamps
    end
  end
end
