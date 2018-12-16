class StoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @top_headlines = newsapi.get_top_headlines(q: 'trump', sources: 'the-new-york-times, fox-news', language: 'en')

    render json: @top_headlines
  end

  def new
  end

  def getStories
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @stories = newsapi.get_everything(q: params['_json'], sources: 'the-new-york-times, fox-news', language: 'en')
    render json: @stories
  end
end
