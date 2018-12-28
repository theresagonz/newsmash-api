class Mash < ActiveModelSerializers::Model
  attributes :topic, :words

  def modify_count(word)
    new_score = word['confidence_score'] * 100
    if new_score > 70
      # puts "modifying count" + word
      new_score * 4
    elsif new_score < 40
      new_score / 3
    else
      new_score
    end
  end

  def self.default_sources
    'the-new-york-times,bbc-news,the-economist,the-washington-post,the-wall-street-journal,fox-news,breitbart-news,al-jazeera-english,politico,rt,reuters,associated-press,cnn,msnbc,google-news,the-huffington-post'
  end

  def self.getMashString(data)
    data.map do |story|
      story.description
    end
  end
    
end
