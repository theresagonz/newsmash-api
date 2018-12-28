class WordSerializer < ActiveModel::Serializer
  attributes :text, :count
  
  def text
    object['keyword']
  end

  def count
    object['confidence_score']
  end
end
