class Mash
  # attr_reader :data

  # def initialize(data)
  #   @data = data
  # end

  def as_json(options={})
    super(:only => [:id, :name, :title, :description, :content]
    )
  end

  def self.getWordStrings(data)
    data.map do |story|
      story.description
    end
  end

  def to_param
    
  end
  
end
