class Mix
  def initialize(data)
    @data = data
  end

  def self.default_sources
    'the-new-york-times,bbc-news,the-economist,the-washington-post,the-wall-street-journal,fox-news,breitbart-news,al-jazeera-english,politico,rt,reuters,associated-press,cnn,msnbc'
  end

  def as_json(options={})
    super(:only => [:id, :name, :title, :description, :content])
  end

  def format_date(date)
    date.localtime.strftime('%A, %B %e, %Y @ %l:%M %P')
  end
end
