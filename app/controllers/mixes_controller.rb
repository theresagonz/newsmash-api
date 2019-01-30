class MixesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def sources
  end

  def get_top_stories
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY'])
    top_stories = newsapi.get_top_headlines(sources: Mix.default_sources, language: 'en', pageSize: 40)

    render json: top_stories
  end

  def get_search_stories
    search_term = params['_json']
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY'])
    all_stories = newsapi.get_everything(q: search_term, sources: Mix.default_sources, language: 'en', sortBy: 'publishedAt', pageSize: 40)
    # exclude nytimes 'briefings'
    filtered_stories = all_stories.select {|story| !story.title.include? "Briefing" } 

    render json: filtered_stories
  end
end
