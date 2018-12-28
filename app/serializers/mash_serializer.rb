class MashSerializer < ActiveModel::Serializer
  attributes :topic, :words
  has_many :words, serializer: WordSerializer
end
