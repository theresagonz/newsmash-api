class MixesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def sources
  end

  def published_at
    publishedAt.localtime.strftime('%A, %B %e, %Y @ %l:%M %P')
  end

  def getTopStories
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @top_stories = newsapi.get_top_headlines(language: 'en')
    render json: @top_stories.as_json({ :methods => [:published_at]})
  end

  def getStoriesBySearch
    newsapi = News.new(ENV['NEWS_API_KEY'])
    all_stories = newsapi.get_everything(q: params['_json'], language: 'en')
    # exclude nytimes briefings
    filtered_stories = all_stories.select {|story| !story.title.include? "Briefing" }
    render json: filtered_stories
  end

  def getTopTrends
    newsapi = News.new(ENV['NEWS_API_KEY'])
    @stories = newsapi.get_top_headlines(language: 'en')
  end
end
