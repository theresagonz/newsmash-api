class CreateClouds < ActiveRecord::Migration[5.2]
  def change
    create_table :clouds do |t|
      t.integer :user_id
      t.string :label
      t.string :words, array: true
      t.timestamps
    end

    add_index :clouds, :words, using: 'gin'
  end
end
