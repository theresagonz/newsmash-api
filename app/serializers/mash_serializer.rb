class MashSerializer < ActiveModel::Serializer
  attributes :id, :topic, :words, :date
  has_many :words, serializer: WordSerializer

  def date
    object.created_at.localtime.strftime('%A, %B %e, %Y @ %l:%M %P') if object.created_at
  end

end
