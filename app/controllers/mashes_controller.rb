class MashesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @mashes = Mash.all
    render json: @mashes
  end

  def create
    binding.pry
    # @mash = Mash.new(mash_params)
    # if @mash.save
    #   render json: @mash.to_json
    # else 
    #   render json: @mash.errors
    # end
  end

  def getTopMashWords
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.get_top_headlines(sources: Mash.default_sources, language: 'en', sortBy: 'publishedAt')
    
    # Consolidate content into one big string
    words = Mash.getMashString(stories).join('')

    # Request keyword analytics from Parallel Dots API
    conn = Faraday.new(url: ENV['TEXT_ANALYSIS_BASE_URL'] + '/keywords')
    response = conn.post do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['api_key'] = ENV['TEXT_ANALYSIS_API_KEY']
      req.params['text'] = words
    end
    binding.pry
    @mash = Mash.new(words: JSON.parse(response.body)['keywords'], topic: 'top stories')
    render json: @mash.as_json
  end

  def getSearchMashWords
    searchTerm = params['_json']
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.get_everything(q: searchTerm, sources: Mash.default_sources, language: 'en')

    # Consolidate content into one big string
    words = Mash.getMashString(stories).join('')
    conn = Faraday.new(url: ENV['TEXT_ANALYSIS_BASE_URL'] + '/keywords')

    # Request keyword analytics from Parallel Dots API
    response = conn.post do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['api_key'] = ENV['TEXT_ANALYSIS_API_KEY']
      req.params['text'] = words
    end
    
    @mash = Mash.new(JSON.parse(response.body))
    render json: @mash.as_json
  end

  private

  def mash_params
    params.require(:mash).permit(:topic, :words => [:text, :count])
  end
end
