class StoriesController < ApplicationController
  def index  
    newsapi = News.new(ENV['API_KEY'])
    @top_headlines = newsapi.get_top_headlines(q: 'trump', sources: 'the-new-york-times,fox-news', language: 'en')
    render json: @top_headlines
  end
end
