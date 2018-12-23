class Mash
  # self.site = ENV['TEXT_ANALYSIS_BASE_URL']

  def self.default_sources
    'the-new-york-times,bbc-news,the-economist,the-washington-post,the-wall-street-journal,fox-news,breitbart-news,al-jazeera-english,politico,rt,reuters,associated-press,cnn,msnbc,google-news,the-huffington-post'
  end

  def self.getWordStrings(data)
    data.map do |story|
      story.description
    end
  end
    
end
