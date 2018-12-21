class Mash

  def self.default_sources
    'the-new-york-times,bbc-news,the-economist,the-washington-post,the-wall-street-journal,fox-news,breitbart-news,al-jazeera-english,politico,rt,reuters,associated-press,cnn,msnbc,google-news,the-huffington-post'
  end
  
  # def as_json(options={})
  #   super(:only => [:id, :name, :title, :description, :content]
  #   )
  # end

  def self.getWordStrings(data)
    data.map do |story|
      story.description
    end
  end
    
end
