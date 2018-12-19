class MixesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def sources
  end

  def getTopStoriesFromNewsApi
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @top_stories = newsapi.get_top_headlines(language: 'en')
    render json: @top_stories
  end

  def getStoriesBySearchFromNewsApi
    # searchTerm = params['_json'] || 
    # binding.pry
    searchTerm = params['_json']
    newsapi = News.new(ENV['NEWS_API_KEY'])
    all_stories = newsapi.get_everything(q: searchTerm, language: 'en')
    # exclude nytimes briefings
    @filtered_stories = all_stories.select {|story| !story.title.include? "Briefing" }
    render json: @filtered_stories
  end

  def getTopTrends
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @stories = newsapi.get_top_headlines(language: 'en')
  end
end
