class RenameCloudsToMashes < ActiveRecord::Migration[5.2]
  def change
    rename_table :clouds, :mashes
  end
end
