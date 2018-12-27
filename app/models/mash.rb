class Mash < ApplicationRecord
  attr_accessor :words

  def as_json(options = {})
    if @words
      if @words.length > 36
        words = @words[0..35]
      else
        words = @words
      end

      {
        "topic" => @topic,
        "words" => (
          words.map do |word|
            {
              "text" => word['keyword'],
              "count" => word['confidence_score']
            }
          end
        )
      }
    end
  end

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
