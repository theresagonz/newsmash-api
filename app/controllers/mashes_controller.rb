class MashesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @mashes = Mash.all
    render json: @mashes.as_json
  end

  def show
    @mash = Mash.find(params[:id])
    render json: @mash
  end

  def create
    @mash = Mash.new(topic: mash_params[:topic])
    @mash['words'] = mash_params['words']

    if @mash.save
      render json: @mash.to_json
    else
      render json: @mash.errors
    end
  end

  def getTopMashWords
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.get_top_headlines(sources: Mash.default_sources, language: 'en', sortBy: 'publishedAt')
    # filteredText = Mash.filter_text(stories).join()

    # Consolidate content into one big string
    words = Mash.getMashString(stories).join('')

    # Request keyword analytics from Parallel Dots API
    conn = Faraday.new(url: ENV['TEXT_ANALYSIS_BASE_URL'] + '/keywords')
    response = conn.post do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['api_key'] = ENV['TEXT_ANALYSIS_API_KEY']
      req.params['text'] = words
    end

    mash = Mash.new(topic: 'top stories', words: JSON.parse(response.body)['keywords'])
    render json: mash
  end

  def getSearchMashWords
    searchTerm = params['_json']
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.get_everything(q: searchTerm, sources: Mash.default_sources, language: 'en', sortBy: 'publishedAt')
    # Consolidate content into one big string
    words = Mash.getMashString(stories).join('')
    conn = Faraday.new(url: ENV['TEXT_ANALYSIS_BASE_URL'] + '/keywords')

    # Request keyword analytics from Parallel Dots API
    response = conn.post do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['api_key'] = ENV['TEXT_ANALYSIS_API_KEY']
      req.params['text'] = words
    end
    
    # Render formatted mash data at api endpoint
    mash = Mash.new(topic: searchTerm, words: JSON.parse(response.body)['keywords'])
    render json: mash
  end

  def getRecentMashes
    @mashes = Mash.all[-5, 5].reverse
    render json: @mashes
  end

  private

  def mash_params
    params.require(:mash).permit(:topic, :words => [:text, :count])
  end
end
