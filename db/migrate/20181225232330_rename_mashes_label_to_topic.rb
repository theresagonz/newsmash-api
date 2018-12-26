class RenameMashesLabelToTopic < ActiveRecord::Migration[5.2]
  def change
    rename_column :mashes, :label, :topic
  end
end
