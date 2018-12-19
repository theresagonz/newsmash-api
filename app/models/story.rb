class Story

  def as_json(options={})
    super(:only => [:id, :name, :title, :description, :content, :url, :urlToImage]
    )
  end

  def to_param
    
  end
  
end
