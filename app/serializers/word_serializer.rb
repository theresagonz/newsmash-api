class WordSerializer < ActiveModel::Serializer
  attributes :text, :count, :url
  
  def text
    object['keyword'] || object['text']
  end

  def count
    object['confidence_score'] || object['count']
  end

  def url
    '/mixes/' + text.slugify
  end
end
