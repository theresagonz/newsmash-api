class MashesController < ApplicationController
  def index
    @mashes = Mash.all
    render json: @mashes
  end

  def create
    @mash = Mash.new(mash_params)
    if @mash.save
      render json: @mash.to_json
    else 
      render json: @mash.errors
    end
  end

  def getTopMashWords
    # Get data using News API's library

    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.get_top_headlines(sources: Mash.default_sources, language: 'en', sortBy: 'relevancy')

    words = Mash.getWordStrings(stories).join('')
    conn = Faraday.new(url: ENV['TEXT_ANALYSIS_BASE_URL'] + '/keywords')

    response = conn.post do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['api_key'] = ENV['TEXT_ANALYSIS_API_KEY']
      req.params['text'] = words
    end

    @mash = Mash.new(JSON.parse(response.body))
    render json: @mash.as_json
  end

  def queryMashWords
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.everything(language: 'en', category: 'general')

  end

  private

  # def _params
  #   params.require(:cloud).permit(:id, :user_id, :label, :words)
  # end
end
