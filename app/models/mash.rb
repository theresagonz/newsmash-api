class Mash

  def initialize(data)
    @words = data['keywords']
  end

  def as_json(options = {})
    {
      "words" => (
        @words.map do |word|
          {
            "text" => word['keyword'],
            "count" => word['confidence_score']
          }
        end
      )
    }
  end

  def self.default_sources
    'the-new-york-times,bbc-news,the-economist,the-washington-post,the-wall-street-journal,fox-news,breitbart-news,al-jazeera-english,politico,rt,reuters,associated-press,cnn,msnbc,google-news,the-huffington-post'
  end

  def self.getWordStrings(data)
    data.map do |story|
      story.description
    end
  end
    
end
