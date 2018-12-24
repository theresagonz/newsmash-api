class RemoveWords < ActiveRecord::Migration[5.2]
  def change
    drop_table :words
  end
end
