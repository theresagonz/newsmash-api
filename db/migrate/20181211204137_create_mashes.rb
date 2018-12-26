class CreateMashes < ActiveRecord::Migration[5.2]
  def change
    create_table :mashes do |t|
      t.string :topic
      t.json :words
      t.timestamps
    end
  end
end
