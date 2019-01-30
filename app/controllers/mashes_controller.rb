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
      render status: 404, json: @mash.errors
    end
  end

  def get_top_mash_words
    # Get data using News API's library
    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.get_top_headlines(sources: Mash.default_sources, language: 'en', pageSize: 30)

    # Combine descriptions into one string
    text = Mash.get_mash_string(stories)

    # Request keyword analytics from Parallel Dots API
    conn = Faraday.new(url: 'https://apis.paralleldots.com/v3/keywords')
    response = conn.post do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['api_key'] = ENV['TEXT_ANALYSIS_API_KEY']
      req.params['text'] = text
    end

    if response.status == 200
      # Render formatted mash data at api endpoint
      mash = Mash.new(topic: 'top stories', words: JSON.parse(response.body)['keywords'].take(40))
      render json: mash
    else
      # Render string at api endpoint
      render json: text
    end
  end
  
  def get_search_mash_words
    search_term = params['_json']

    newsapi = News.new(ENV['NEWS_API_KEY']);
    stories = newsapi.get_everything(q: search_term, sources: Mash.default_sources, language: 'en', sortBy: 'publishedAt', pageSize: 30)

    text = Mash.get_mash_string(stories)

    conn = Faraday.new(url: 'https://apis.paralleldots.com/v3/keywords')
    response = conn.post do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['api_key'] = ENV['TEXT_ANALYSIS_API_KEY']
      req.params['text'] = text
    end

    if response.status == 200
      mash = Mash.new(topic: search_term, words: JSON.parse(response.body)['keywords'].take(40))
      render json: mash
    else
      render json: text
    end
  end

  def get_recent_mashes
    length = Mash.all.length
    @mashes = length < 10 ? Mash.all[-length, length].reverse : Mash.all[-10, 10]
    render json: @mashes
  end

  private

  def mash_params
    params.require(:mash).permit(:topic, :words => [:text, :count])
  end
end
