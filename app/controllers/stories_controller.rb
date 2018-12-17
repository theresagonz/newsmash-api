class StoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @top_headlines = newsapi.get_top_headlines(language: 'en')

    render json: @top_headlines
  end

  def new
  end

  def getStoriesBySearch    
    newsapi = News.new(ENV['NEWS_API_KEY'])
    all_stories = newsapi.get_everything(q: params['_json'], language: 'en')
    filtered_stories = all_stories.select {|story| !story.title.include? "Briefing" }
    render json: filtered_stories
  end

  def getTopStories
    newsapi = News.new(ENV['NEWS_API_KEY'])
    stories = newsapi.get_top_headlines(language: 'en')
    render json: stories
  end

  def getTopTrends
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @stories = newsapi.get_top_headlines(language: 'en')
  end
end
