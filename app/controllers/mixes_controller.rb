class MixesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def sources
  end

  def getTopStoriesFromNewsApi
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @top_stories = newsapi.get_top_headlines(sources: 'the-new-york-times,bbc-news,the-economist,the-washington-post,the-wall-street-journal,fox-news,breitbart-news,al-jazeera-english,politico,rt,reuters,associated-press,cnn,msnbc,google-news,the-huffington-post', language: 'en', sortBy: 'relevancy')
    render json: @top_stories
  end

  def getStoriesBySearchFromNewsApi
    searchTerm = params['_json']
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY'])
    all_stories = newsapi.get_everything(q: searchTerm, sources: 'the-new-york-times,bbc-news,the-economist,the-washington-post,the-wall-street-journal,fox-news,breitbart-news,al-jazeera-english,politico,rt,reuters,associated-press,cnn,msnbc,google-news,the-huffington-post', language: 'en', sortBy: 'relevancy')
    # exclude nytimes briefings
    @filtered_stories = all_stories.select {|story| !story.title.include? "Briefing" }
    render json: @filtered_stories
  end
end
